import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './screens/OnBoardingScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';

const AppStack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator
        headerMode = "none"
      >
        <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SignUp" component={Signup} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;