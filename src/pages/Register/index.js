import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, Input } from '../../components';
import { Firebase } from "../../config";
import { colors, showSuccess, storeData, useForm, showError } from '../../utils';


const Register = ({ navigation }) => {
    const dispatch = useDispatch();

    const [form, setForm] = useForm({
        fullName: '',
        pekerjaan: '',
        email: '',
        password: '',
    });
    const onContinue = () => {
        dispatch({ type: 'SET_LOADING', value: true })
        Firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then((userCredential) => {
                const dataUser = {
                    uid: userCredential.user.uid,
                    fullName: form.fullName,
                    profession: form.pekerjaan,
                    email: form.email,
                    remarks: form.password,
                }
                // store user credential 
                // https://firebase.com/users/uidasdacsdf234/
                Firebase.database().ref(`users/${userCredential.user.uid}/`)
                    .set(dataUser) // definedata to save
                setForm('reset')
                showSuccess({
                    message: "Success",
                    description: "Registrasi berhasil, silahkan verifikasi email kamu",
                });
                storeData('user', dataUser)
                navigation.navigate('UploadPhoto', dataUser)
                // Signed in 
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                showError({
                    message: "Upss.. Something went wrong!",
                    description: errorMessage,
                });
                console.log('error while registation', errorMessage)
                // ..
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', value: false })
            })
    }
    return (
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
