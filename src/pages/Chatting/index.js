import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts, getChatTime, getData, setDateChat } from '../../utils'
import { Firebase } from '../../config';


const Chatting = ({ navigation, route }) => {

    const [chatContent, setChatContent] = useState("")
    const [user, setUser] = useState({})
    const [chatData, setChatData] = useState([])
    const dataDoctor = route.params;
    const goBack = () => {
        navigation.goBack()
    }


    useEffect(() => {
        getDataUserFromLocal()
        const chatId = `${user.uid}_${dataDoctor.data.uid}`
        const urlFirebase = `chatting/${chatId}/allChat/`;
        Firebase.database().ref(urlFirebase).on('value', (snapshot) => {
            // jika ada data
            if (snapshot.val()) {
                const dataSnapshot = snapshot.val();
                const allDataChat = [];
                // refactor object to array in date
                Object.keys(dataSnapshot).map(key => {
                    const dataChat = dataSnapshot[key];
                    const newDataChat = [];
                    // refactor object to array in chat content
                    Object.keys(dataChat).map(item => {
                        newDataChat.push({
                            id: item,
                            data: dataChat[item]
                        })
                    })
                    allDataChat.push({
                        id: key,
                        data: newDataChat
                    })
                })
                setChatData(allDataChat)
            }
        })
    }, [dataDoctor.data.uid, user.uid])

    const chatSend = () => {
        const today = new Date();
        const chatBody = {
            sendBy: user.uid,
            chatDate: today.getTime(),
            chatTime: getChatTime(today),
            chatContent: chatContent,
        }
        // send data to firebase
        const chatId = `${user.uid}_${dataDoctor.data.uid}`
        const urlSendChat = `chatting/${chatId}/allChat/${setDateChat(today)}`;
        const urlMessageUser = `messages/${user.uid}/${chatId}`;
        const urlMessageDokter = `messages/${dataDoctor.data.uid}/${chatId}`;
        const dataHistoryChatForUser = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: dataDoctor.data.uid
        }
        const dataHistoryChatForDoctor = {
            lastContentChat: chatContent,
            lastChatDate: today.getTime(),
            uidPartner: user.uid
        }
        Firebase.database().ref(urlSendChat).push(chatBody)
            .then(res => {
                setChatContent("")
                // create history for user
                Firebase.database().ref(urlMessageUser).set(dataHistoryChatForUser)
                // create history for dokter
                Firebase.database().ref(urlMessageDokter).set(dataHistoryChatForDoctor)
            })
            .catch(err => {
                console.log('error send message', err)
            })

    }

    // get data user from localstorage
    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    return (
        <View style={styles.page} >
            <Header title={dataDoctor.data.fullName} desc={dataDoctor.data.category} photo={{ uri: dataDoctor.data.photo }} type="dark-profile" onPress={goBack} />
            <View style={styles.content} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {chatData.map(chat => {
                        return (
                            <View key={chat.id}>
                                <Text style={styles.chatDate} >{chat.id}</Text>
                                {/* mapping chat by tanggal */}
                                {chat.data.map(itemChat => {
                                    const isMe = itemChat.data.sendBy === user.uid;
                                    return <ChatItem key={itemChat.id} text={itemChat.data.chatContent} date={itemChat.data.chatTime} isMe={isMe} photo={isMe ? null : { uri: dataDoctor.data.photo }} />
                                })}
                            </View>
                        )
                    })}

                </ScrollView>

            </View>
            <InputChat value={chatContent} onChangeText={(value) => setChatContent(value)} onButtonPress={chatSend} />
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
