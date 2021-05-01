import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3 } from '../../assets'
import { List } from '../../components'
import { colors, fonts } from '../../utils'

const Message = ({ navigation }) => {

    const [listDokter, setListDokter] = useState([
        {
            id: 1,
            profile: DummyDokter1,
            name: 'Conor Mcnugget',
            desc: 'Swallowed teeth, broken feet, broken fingers..'
        },
        {
            id: 2,
            profile: DummyDokter2,
            name: 'Tony El Cucuy',
            desc: 'Type of guy'
        },
        {
            id: 3,
            profile: DummyDokter3,
            name: 'Dustin Poirier',
            desc: 'just send me donation'
        },
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content} >
                <Text style={styles.title}>Message</Text>
                {
                    listDokter.map((dokter, index) => <List onPress={() => navigation.navigate('Chatting')} key={index} profile={dokter.profile} name={dokter.name} desc={dokter.desc} />)
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
