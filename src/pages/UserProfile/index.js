import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyUser } from '../../assets';
import { Gap } from '../../components';
import { Header, List, Profile } from "../../components/molecules";
import { Firebase } from '../../config';
import { colors, getData, removeData, showSuccess } from '../../utils';

const UserProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        profession: '',
        photo: DummyUser
    })

    // fungsi logout
    const logout = () => {
        Firebase.auth().signOut().then(() => {
            // Sign-out successful.
            showSuccess({
                message: "Logout berhasil!",
                type: "success"
            });
            removeData('user')
            navigation.replace('GetStarted')
        }).catch((error) => {
            console.log('gagal logout', error)
            // An error happened.
        });
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
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            { profile.fullName.length > 0 &&
                <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />
            }
            <Gap height={14} />
            <List onPress={() => navigation.navigate('UpdateProfile')} name="Edit Profile" type="next" desc="Last update yesterday" icon="edit-profile" />
            <List onPress={() => navigation.navigate('UpdateProfile')} name="Language" type="next" desc="Available 2 Language" icon="language" />
            <List onPress={() => navigation.navigate('UpdateProfile')} name="Give Us Rate" type="next" desc="On Google Play Store" icon="give-rate" />
            <List onPress={logout} name="Logout" type="next" desc="Logout from application" icon="help-center" />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
