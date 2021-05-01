import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({ title, size, textAlign, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Text style={styles.text(size, textAlign)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size, texAlign) => ({
        fontSize: size,
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        textDecorationLine: 'underline',
        textAlign: texAlign
    })
})
