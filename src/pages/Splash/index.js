import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted') // tidak menyimpan history screen sebelumnya
    }, 5000);
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
  page: { flex:1, alignItems:"center", justifyContent: "center" },
  title: {
    marginTop:20,
    fontFamily: 'Nunito-SemiBold',
    fontSize:20,
    fontWeight: "600",
    color: "#112340"
   },
})
