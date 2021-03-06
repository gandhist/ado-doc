import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter1 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = ({ title, photo, desc, onPress }) => {
    return (
        <View style={styles.container} >
            <Button type="icon-only" icon="back-light" onPress={onPress} />
            <View style={styles.content} >
                <Text style={styles.name} >{title}</Text>
                <Text style={styles.desc} >{desc}</Text>
            </View>
            <Image style={styles.avatar} source={photo} />
        </View>
    )
}

export default DarkProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 18,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        marginTop: 6,
        textAlign: 'center',
        color: colors.text.subTitle
    }
})
