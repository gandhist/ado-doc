import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDokter1, DummyDokter2, DummyDokter3 } from '../../assets'
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page} >
            <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()} />
            <ListDoctor onPress={() => navigation.navigate('Chatting')} type='next' name="Islam Makhachev" profile={DummyDokter2} desc="Pria" />
            <ListDoctor onPress={() => navigation.navigate('Chatting')} type='next' name="Amanda Nunes" profile={DummyDokter3} desc="Wanita" />
            <ListDoctor onPress={() => navigation.navigate('Chatting')} type='next' name="Kamaru Usman" profile={DummyDokter2} desc="Pria" />
            <ListDoctor onPress={() => navigation.navigate('Chatting')} type='next' name="Zhang Weili" profile={DummyDokter3} desc="Wanita" />
            <ListDoctor onPress={() => navigation.navigate('Chatting')} type='next' name="Zabit Magomedsharipov" profile={DummyDokter2} desc="Pria" />
        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.white,
         flex: 1
    }
})
