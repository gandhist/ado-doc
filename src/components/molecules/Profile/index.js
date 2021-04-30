import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = () => {
    return (
        <View style={styles.container} >
            <View style={styles.borderProfile} >
                <Image style={styles.avatar} source={DummyUser} />
            </View>
            <Text style={styles.name} >Roseanne Park</Text>
            <Text style={styles.profession} >Korean-New Zealand singer</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        height: 110,
        width: 110,
        borderRadius: 110 / 2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2
    }
})