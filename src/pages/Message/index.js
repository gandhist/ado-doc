import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from '../../components'
import { Firebase } from '../../config'
import { colors, fonts, getData } from '../../utils'

const Message = ({ navigation }) => {
    const [user, setUser] = useState({})
    const [historyChat, setHistoryChat] = useState([])


    // get data user from localstorage
    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res)
        })
    }

    useEffect(() => {
        getDataUserFromLocal()
        const rootDB = Firebase.database().ref();
        const urlHistory = `messages/${user.uid}/`;
        const messageDB = rootDB.child(urlHistory)
        messageDB.on('value', async snapshot => {
            if (snapshot.val()) {
                const oldData = snapshot.val()
                const data = [];
                const promises = await Object.keys(oldData).map(async key => {
                    const urlUidDoctor = `doctors/${oldData[key].uidPartner}`
                    const detailDoctor = await rootDB.child(urlUidDoctor).once('value')
                    console.log('detail doctor', detailDoctor.val())
                    data.push({
                        id: key,
                        detailDoctor: detailDoctor.val(),
                        ...oldData[key]
                    })
                })

                await Promise.all(promises)
                setHistoryChat(data)
                console.log('ini list message', data)
            }
        })
    }, [])
    return (
        <View style={styles.page}>
            <View style={styles.content} >
                <Text style={styles.title}>Message</Text>
                {
                    historyChat.map((chat) => {
                        const dataDoctor = {
                            id: chat.detailDoctor.uid,
                            data: chat.detailDoctor
                        }
                        return < List key={chat.id} onPress={() => navigation.navigate('Chatting', dataDoctor)} profile={{ uri: chat.detailDoctor.photo }} name={chat.detailDoctor.fullName} ph desc={chat.lastContentChat} />
                    }
                    )
                }
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
    content: {
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
        marginLeft: 16
    }
})
