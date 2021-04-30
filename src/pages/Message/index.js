import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListDoctor } from '../../components'
import { colors, fonts } from '../../utils'

const Message = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content} >
                <Text style={styles.title}>Message</Text>
                <ListDoctor />
                <ListDoctor />
                <ListDoctor />
            </View>
            
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content : {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft:16
    }
})