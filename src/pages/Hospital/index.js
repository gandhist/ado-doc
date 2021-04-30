import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBg } from '../../assets'
import { ListHospital } from '../../components/molecules'
import { colors, fonts } from '../../utils'

const Hospital = () => {
    return (
        <View style={styles.page} >
            <ImageBackground style={styles.background} source={ILHospitalBg} >
                <Text style={styles.title}>Nearby Hospital</Text>
                <Text style={styles.desc}>3 Terdekat</Text>
            </ImageBackground>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ListHospital pic={DummyHospital1} type="Rumah Sakit" name="Citra Bunga Merdeka" address="jln. Surya Sejahtera 20" />
                    <ListHospital pic={DummyHospital2} type="Rumah Sakit Anak" name="Happy Family & Kids" address="jln. Surya Sejahtera 20" />
                    <ListHospital pic={DummyHospital3} type="Rumah Sakit Jiwa" name="Tingkat Paling atas" address="jln. Surya Sejahtera 20" />
                    <ListHospital pic={DummyHospital1} type="Rumah Sakit" name="Citra Bunga Merdeka" address="jln. Surya Sejahtera 20" />
                    <ListHospital pic={DummyHospital2} type="Rumah Sakit Anak" name="Happy Family & Kids" address="jln. Surya Sejahtera 20" />
                    <ListHospital pic={DummyHospital3} type="Rumah Sakit Jiwa" name="Tingkat Paling atas" address="jln. Surya Sejahtera 20" />
                </ScrollView>
            </View>
        </View>
    )
}

export default Hospital

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content : {
        backgroundColor: colors.white,
        flex: 1,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 14
    },
    background : {
        height: 240,
        paddingTop: 30
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    }
})
