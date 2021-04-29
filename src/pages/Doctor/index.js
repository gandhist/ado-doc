import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, HomeProfile, RatedDoctor, NewsItem } from '../../components'

const Doctor = () => {
    return (
        <View>
            <HomeProfile />
            <Text>Mau konsultasi dengan siapa hari ini?</Text>
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <DoctorCategory />
            <Text>Top rated doctor</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text>Top rated doctor</Text>
            <NewsItem />
            <NewsItem />
            <NewsItem />

        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({})
