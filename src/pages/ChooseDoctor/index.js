import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDokter2, DummyDokter3 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation }) => {
    return (
        <View style={styles.page} >
            <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Islam Makhachev" profile={DummyDokter2} desc="Pria" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Amanda Nunes" profile={DummyDokter3} desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Kamaru Usman" profile={DummyDokter2} desc="Pria" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Zhang Weili" profile={DummyDokter3} desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Zabit Magomedsharipov" profile={DummyDokter2} desc="Pria" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
