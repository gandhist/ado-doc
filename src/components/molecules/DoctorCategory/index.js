import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILDokUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = () => {
    return (
        <View style={styles.container} >
            <ILDokUmum style={styles.ilustration} />
            <Text style={styles.label}>I need general doctor</Text>
            <Text style={styles.labelCat}>Dokter umum</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf:'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 120,
    },
    ilustration: {
        marginBottom:28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    labelCat : {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
