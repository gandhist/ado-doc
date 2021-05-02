import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Firebase } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({ navigation }) => {

  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation])


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
