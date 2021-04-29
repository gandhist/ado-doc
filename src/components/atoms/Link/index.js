import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title, size, textAlign}) => {
    return (
        <View>
            <Text style={styles.text(size, textAlign)} >{title}</Text>
        </View>
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
