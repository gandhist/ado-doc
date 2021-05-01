import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, useForm } from '../../utils'
import { Firebase } from "../../config";
import { showMessage, hideMessage } from "react-native-flash-message";

const Register = ({ navigation }) => {
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useForm({
        fullName: '',
        pekerjaan: '',
        email: '',
        password: '',
    });
    const onContinue = () => {
        setLoading(true)
        Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                setLoading(false)
                setForm('reset')
                showMessage({
                    message: "Success",
                    description: "Registrasi berhasil, silahkan verifikasi email kamu",
                    type: "success",
                    animated: true,
                    hideOnPress: true,
                    autoHide: false
                });
                // Signed in 
                var user = userCredential.user;
                console.log('registration successfully', user)
            })
            .catch((error) => {
                setLoading(false)
                var errorCode = error.code;
                var errorMessage = error.message;
                showMessage({
                    message: "Upss.. Something went wrong!",
                    description: errorMessage,
                    type: "warning",
                    backgroundColor: colors.error,
                    color: colors.white,
                    animated: true,
                    hideOnPress: true,
                    autoHide: false
                });
                console.log('error while registation', errorMessage)
                // ..
            });
        // navigation.navigate('UploadPhoto')
    }
    return (
        <>
            <View style={styles.page}>
                <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
                <View style={styles.content} >
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <Input secureTextEntry={false} label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName', value)} />
                        <Gap height={24} />
                        <Input secureTextEntry={false} label="Pekerjaan" value={form.pekerjaan} onChangeText={(value) => setForm('pekerjaan', value)} />
                        <Gap height={24} />
                        <Input secureTextEntry={false} label="Email" value={form.email} onChangeText={(value) => setForm('email', value)} />
                        <Gap height={24} />
                        <Input secureTextEntry={true} label="Password" value={form.password} onChangeText={(value) => setForm('password', value)} />
                        <Gap height={40} />
                        <Button title="Continue" onPress={onContinue} />
                    </ScrollView>
                </View>
            </View>
            {
                loading && <Loading />
            }

        </>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
