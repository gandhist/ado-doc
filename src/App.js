import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';
const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Router />
    </NavigationContainer>
  )
}

export default App;

