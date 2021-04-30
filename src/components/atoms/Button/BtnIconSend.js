import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconSend, IconSendActive } from '../../../assets'
import { colors } from '../../../utils'

const BtnIcon = ({disable}) => {
    return (
        <TouchableOpacity style={styles.container(disable)} >
            {
                disable ? <IconSend /> : <IconSendActive />
            }
        </TouchableOpacity  >
    )
}

export default BtnIcon

const styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.tertiary,
        width: 45,
        height: 45,
        borderRadius: 10,
        paddingTop: 3,
        paddingRight: 8,
        paddingBottom: 3,
        paddingLeft: 8
    })
})
