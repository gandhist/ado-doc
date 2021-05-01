import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Firebase } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({ navigation }) => {

  useEffect(() => {
    // setTimeout(() => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // if logged in
        // console.log('loggin', user)
        navigation.replace('MainApp')
      }
      else {
        // if not loggedin
        navigation.replace('GetStarted') // tidak menyimpan history screen sebelumnya
      }
    })
    // }, 2000);
  }, [])


  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Ado Dokter</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: {
    marginTop: 20,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary
  },
})
