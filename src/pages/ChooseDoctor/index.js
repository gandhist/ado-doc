import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDokter2, DummyDokter3 } from '../../assets'
import { Header, List } from '../../components'
import { Firebase } from '../../config'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation, route }) => {
    const dataCategory = route.params;

    const [doctors, setDoctors] = useState([])

    const parseObjToArray = (listObj) => {
        const data = [];
        Object.keys(listObj).map(key => {
            data.push({
                id: key,
                data: listObj[key]
            })
        })
        return data;
    }

    const getDoctorByCategory = (category) => {
        console.log('category = ', category)
        Firebase.database().ref('doctors/').orderByChild('category').equalTo(category.toLowerCase()).once('value')
            .then(res => {
                console.log('test cat')
                if (res.val()) {
                    console.log('data cat doc', res.val())
                    setDoctors(parseObjToArray(res.val()))
                }
            })
            .catch(err => {
                console.log('err data category', err)
                showError({ message: 'Failed to get data', description: err.toString() })
            })
    }

    const btnBack = () => {
        navigation.goBack('MainApp')
    }

    useEffect(() => {
        getDoctorByCategory(dataCategory.category)
    }, [])
    return (
        <View style={styles.page} >
            <Header title={`Pilih ${dataCategory.category}`} type="dark" onPress={btnBack} />
            {doctors.map(doctor => {
                return <List key={doctor.data.id} onPress={() => navigation.navigate('DoctorProfile', doctor)} type='next' name={doctor.data.fullName} profile={{ uri: doctor.data.photo }} desc={doctor.data.gender} />
            })}
            {/*             
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Amanda Nunes" profile={DummyDokter3} desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Kamaru Usman" profile={DummyDokter2} desc="Pria" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Zhang Weili" profile={DummyDokter3} desc="Wanita" />
            <List onPress={() => navigation.navigate('Chatting')} type='next' name="Zabit Magomedsharipov" profile={DummyDokter2} desc="Pria" /> */}
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
