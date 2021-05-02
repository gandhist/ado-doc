import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, showError, showSuccess, storeData, useForm } from '../../utils'

const Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [form, setForm] = useForm({
        email: 'kamaru@email.com',
        password: 'Qw3rty13',
    });

    const signIn = () => {
        dispatch({ type: 'SET_LOADING', value: true })
        Firebase.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                showSuccess({
                    message: "Success",
                    description: "Berhasil login",
                })
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
                showError({
                    message: "Upss.. Something went wrong!",
                    description: err.toString(),
                })
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', value: false })
            })
    }
    return (
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
