import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({ value, onChangeText, onButtonPress }) => {
    return (
        <View style={styles.container} >
            <TextInput style={styles.input} placeholder="why don't you send me message?!" value={value} onChangeText={onChangeText} />
            <Button type="btn-icon-send" disable={value.length < 1 ? true : false} title="Send" onPress={onButtonPress} />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45

    }
})
