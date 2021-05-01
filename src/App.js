import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
import FlashMessage from "react-native-flash-message";
const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* Rest of your app code */}
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  )
}

export default App;

