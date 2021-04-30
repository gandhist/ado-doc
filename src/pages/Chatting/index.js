import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View style={styles.page} >
            <Header title="Conor Mcgregor" type="dark-profile" onPress={() => navigation.goBack()} />
            <View style={styles.content} >
                <Text style={styles.chatDate} >Jumaat 13 April 1996</Text>
                <ChatItem isMe={true} />
                <ChatItem isMe={false} />
                <ChatItem isMe={true} />
            </View>
            <InputChat />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    }
})
