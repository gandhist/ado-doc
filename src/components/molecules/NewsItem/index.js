import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const NewsItem = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>is it safe to stay at home during coronavirus?</Text>
                <Text style={styles.date} >Today</Text>
            </View>
            <Image style={styles.image} source={DummyNews1} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: colors.border,
        borderBottomWidth:1,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    titleWrapper : {
        flex: 1
    },
    date : {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11
    }
})
