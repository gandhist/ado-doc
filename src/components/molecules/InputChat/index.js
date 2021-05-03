import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({ value, onChangeText, onButtonPress }) => {
    return (
        <View style={styles.container} >
            <TextInput multiline={true} placeholderTextColor={colors.text.subTitle} style={styles.input} placeholder="Tulis pesan" value={value} onChangeText={onChangeText} />
            <View style={{ alignSelf: 'flex-end' }} >
                <Button type="btn-icon-send" disable={value.length < 1 ? true : false} title="Send" onPress={onButtonPress} />
            </View>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 20,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        color: colors.text.primary,
        fontFamily: fonts.primary.normal,
        // eight: 45

    }
})
