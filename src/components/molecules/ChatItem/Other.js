import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDokter1 } from '../../../assets'
import { colors, fonts } from '../../../utils'


const Other = ({ text, date, photo }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={photo} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.text} >{text}</Text>
                </View>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    chatContent: {
        padding: 12,
        paddingLeft: 18,
        backgroundColor: colors.primary,
        // maxWidth: '80%',
        borderRadius: 10,
        borderBottomLeftRadius: 0
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    date: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        marginRight: 20,
    }
})
