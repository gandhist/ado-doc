import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link, Loading } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, storeData, getData, useForm } from '../../utils'
import { showMessage, hideMessage } from "react-native-flash-message";


const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useForm({
        email: 'kamaru@email.com',
        password: 'Qw3rty13',
    });

    const signIn = () => {
        // console.log('data login: ', form)
        setLoading(true)
        Firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                showMessage({
                    message: "Berhasil Login!",
                    type: "success",
                    animated: true,
                    hideOnPress: true,
                    autoHide: true
                });
                Firebase.database().ref(`users/${res.user.uid}`).once('value').then(resDB => {
                    if (resDB.val()) {
                        const data = resDB.val();
                        data.uid = res.user.uid;
                        storeData('user', data)
                        navigation.replace('MainApp', resDB.val())
                    }
                })
            })
            .catch(err => {
                showMessage({
                    message: "Upss.. Something went wrong!",
                    description: err.toString(),
                    type: "warning",
                    backgroundColor: colors.error,
                    color: colors.white,
                    animated: true,
                    hideOnPress: true,
                    autoHide: false
                });
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <>

            <View style={styles.page} >
                <Gap height={40} />

                <ScrollView showsVerticalScrollIndicator={false} >
                    <ILLogo />
                    <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                    <View>
                        <Input label="Email Address" secureTextEntry={false} value={form.email} onChangeText={(value) => setForm('email', value)} />
                        <Gap height={24} />
                        <Input label="Password" secureTextEntry={true} value={form.password} onChangeText={(value) => setForm('password', value)} />
                    </View>
                    <Gap height={10} />
                    <Link title="Forgot Password" size={12} />
                    <Gap height={40} />
                    <Button title="Sign In" onPress={signIn} />
                    <Gap height={30} />

                    <Link title="Create New Account" size={16} textAlign="center" onPress={signIn} />
                </ScrollView>
            </View>
            {
                loading && <Loading />
            }
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 40,
        backgroundColor: colors.white,
        flex: 1
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginVertical: 40,
        maxWidth: 153
    }
})
