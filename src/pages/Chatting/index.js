import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View>
            <Header title="Conor Mcgregor" type="dark-profile" onPress={() => navigation.goBack()} />
            <Text style={styles.chatDate} >Jumaat 13 April 1996</Text>
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})
