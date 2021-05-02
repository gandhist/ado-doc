import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ILDokUmum, ILDokPsi, ILDokObat } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({ title, onPress }) => {
    const Icon = () => {
        if (title === 'Dokter Umum') return <ILDokUmum style={styles.ilustration} />
        if (title === 'Psikiater') return <ILDokPsi style={styles.ilustration} />
        if (title === 'Dokter Anak') return <ILDokObat style={styles.ilustration} />
        return <ILDokUmum style={styles.ilustration} />;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.labelCat}>{title}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 120,
    },
    ilustration: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    labelCat: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
})
