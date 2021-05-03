import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({ label, value, secureTextEntry, onChangeText, disable }) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.tertiary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput editable={!disable} selectTextOnFocus={!disable} secureTextEntry={secureTextEntry} onFocus={onFocusForm} onBlur={onBlurForm} value={value} onChangeText={onChangeText} style={styles.input(border)} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: (border) => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            padding: 12,
            color: colors.text.primary,
        }
    ),
    label: {
        fontFamily: fonts.primary[400],
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6
    }
})
