import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, IconAddPhoto, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
    return (
        <View style={styles.container} >
            <Image source={DummyDokter1} style={styles.avatar} />
            <View style={styles.profile}>
                <Text style={styles.name}>Islam Makhachev</Text>
                <Text style={styles.category}>Orbital Bones</Text>
            </View>
            <View style={styles.rate}>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </View>
        </View>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    rate: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2
    },
    profile : {
        flex:1
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 12
    }
})