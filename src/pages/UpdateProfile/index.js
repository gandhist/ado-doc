import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { Firebase } from '../../config'
import { colors, getData, storeData } from '../../utils'
import { showMessage } from 'react-native-flash-message';
import { DummyUser } from '../../assets'


const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        uid: '',
        fullName: '',
        profession: '',
        email: '',
        photo: ''
    })

    const changeText = (key, value) => {
        setProfile({
            ...profile, [key]: value
        })
    }

    const update = () => {
        delete profile.email
        const data = profile;
        data.photo = profile.photo.uri;
        Firebase.database().ref(`users/${profile.uid}/`).update(data).then(() => {
            // update data local storage
            showMessage({
                message: "Data Berhasil di update!",
                type: "success",
                animated: true,
                hideOnPress: true,
                autoHide: true
            });
            navigation.goBack('UserProfile')
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
                console.log('err', err)
            })
    }

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            data.photo = { uri: res.photo }
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
                        <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} isRemove={true} />
                    }
                    <Gap height={26} />
                    <Input label="Full Name" value={profile.fullName} onChangeText={(value) => changeText('fullName', value)} />
                    <Gap height={24} />
                    <Input label="Pekerjaan" value={profile.profession} onChangeText={(value) => changeText('profession', value)} />
                    <Gap height={24} />
                    <Input disable={true} label="Email" value={profile.email} />
                    <Gap height={24} />
                    <Input label="Password" secureTextEntry={true} />
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
