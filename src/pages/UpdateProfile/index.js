import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Input, Profile } from '../../components'
import { colors } from '../../utils'

const UpdateProfile = ({ navigation }) => {
    return (
        <View style={styles.page} >
            <Header title="Edit Profile" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.content} >
                    <Profile name="Roseanne Park" desc="Korean-New Zealand singer" />
                    <Gap height={26} />
                    <Input label="Full Name" />
                    <Gap height={24} />
                    <Input label="Pekerjaan" />
                    <Gap height={24} />
                    <Input label="Email" />
                    <Gap height={24} />
                    <Input label="Dashboard" />
                    <Gap height={40} />
                    <Button title="Save Profile" />
                </View>
            </ScrollView>

        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})
