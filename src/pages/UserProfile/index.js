import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../components';
import { Header, List, Profile } from "../../components/molecules";
import { colors } from '../../utils';

const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.page} >
            <Header title="Profile" onPress={() => navigation.goBack()} />
            <Gap height={10} />
            <Profile />
            <Gap height={14} />
            <List name="Edit Profile" type="next" desc="Last update yesterday" icon="edit-profile" />
            <List name="Language" type="next" desc="Available 2 Language" icon="language" />
            <List name="Give Us Rate" type="next" desc="On Google Play Store" icon="give-rate" />
            <List name="Help Center" type="next" desc="Read Our Guidelines" icon="help-center" />
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
