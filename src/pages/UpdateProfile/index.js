import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { Firebase } from '../../config'
import { colors, getData, showError, showSuccess, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets'



const UpdateProfile = ({ navigation }) => {

    const [photoDB, setPhotoDB] = useState('')
    const [password, setPassword] = useState('')
    const [photo, setPhoto] = useState(ILNullPhoto)
    const [profile, setProfile] = useState({
        uid: '',
        fullName: '',
        profession: '',
        email: '',
        photo: ILNullPhoto
    })

    const changeText = (key, value) => {
        setProfile({
            ...profile, [key]: value
        })
    }

    const update = () => {
        delete profile.email
        const data = profile;
        data.photo = photoDB;
        if (password.length > 0) {
            // user want to change password
            if (password.length < 6) {
                showSuccess({
                    message: "Upss.. Something went wrong!",
                    description: 'password minimal 6 character'
                });
            }
            else {
                // change password
                Firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        user.updatePassword(password).catch(err => {
                            showError({
                                message: "Upss.. Something went wrong!",
                                description: err.toString()
                            });
                        })
                    }
                })
                data.remarks = password
            }
        }
        Firebase.database().ref(`users/${profile.uid}/`).update(data).then(() => {
            // update data local storage
            storeData('user', data)
            showSuccess({
                message: "Data Berhasil di update!",
                type: "success"
            });
            navigation.goBack('MainApp')
        })
            .catch(err => {
                showError({
                    message: "Upss.. Something went wrong!",
                    description: err.toString()
                });
                console.log('err', err)
            })
    }


    const getImage = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.8,
            maxWidth: 200,
            maxHeight: 200
        }
        launchImageLibrary(options, (res) => {
            const { didCancel } = res;
            if (!didCancel) {
                const source = { uri: res.uri };
                const photoToDB = `data:${res.type};base64,${res.base64}`;
                setPhotoDB(photoToDB)
                setPhoto(source)
            }
        })
    }

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            data.photo = { uri: res.photo }
            setPhoto(res.photo)
            setProfile(data)
        })
            .catch(err => console.log('error get data localsorage', err))
    }, [])
    return (
        <View style={styles.page} >
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.content} >
                    {profile.fullName.length > 0 &&
                        <Profile name={profile.fullName} desc={profile.profession} photo={photo} isRemove={true} onPress={getImage} />
                    }
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName', value)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
                    <Gap height={24} />
                    <Input disable={true} label="Email" value={profile.email} />
                    <Gap height={24} />
                    <Input label="Password" value={password} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
                    <Gap height={40} />
                    <Button title="Save Profile" onPress={update} />
                </View>
            </ScrollView>

        </View>
    )
}

export default UpdateProfile

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
