import React from 'react';
import { GetStarted, Splash } from "./pages";
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <GetStarted /> */}
      <Router />
    </NavigationContainer>
  )
}

export default App;

