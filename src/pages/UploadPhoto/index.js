import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Button, Gap, Header, Link } from '../../components'
import { colors, fonts } from '../../utils'
import { ILNullPhoto, IconAddPhoto } from "../../assets";

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.page} >
            <Header onPress={() => navigation.goBack()} title="Upload Photo" />
            <View style={styles.content} >
                <View style={styles.profile} >
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Text style={styles.name}>Khabib Nurmagomedov</Text>
                    <Text style={styles.job}>UFC Fighter</Text>
                </View>
                <View>
                    <Button title="Upload and Continue" onPress={() => navigation.replace('MainApp')} />
                    <Gap height={30} />
                    <Link title="Skip for this" textAlign="center" size={16} onPress={() => navigation.replace('MainApp')} />
                </View>
            </View>

        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    avatarWrapper: {
        height: 130,
        width: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: 110,
        width: 110,
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center'
    },
    job: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 60,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})
