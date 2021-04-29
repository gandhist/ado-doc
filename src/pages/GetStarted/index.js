 import React from 'react'
 import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogo, ILGetStarted } from '../../assets'
import { Button, Gap } from '../../components'
 
 const GetStarted = ({navigation}) => {
     return (
         <ImageBackground source={ILGetStarted} style={styles.page}>
             <View>
                <ILLogo />
                <Text style={styles.title} >Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
             </View>
            <View >
                <Button type="primary" title="Get Started" onPress={() => navigation.navigate('Register')} />
                <Gap height={16} />
                <Button type="secondary" title="Sign In" onPress={() => navigation.navigate('Login')} />
             </View>
         </ImageBackground >
     )
 }
 
 export default GetStarted
 
 const styles = StyleSheet.create({
     page: {
         padding: 40,
         justifyContent: 'space-between',
         backgroundColor: 'pink',
         flex: 1
     },
     title: {
         fontFamily: 'Nunito-SemiBold',
         fontSize:28,
         color: 'white',
         marginTop: 91
     }
 })
 