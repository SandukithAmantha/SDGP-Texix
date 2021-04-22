import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnBoardingScreen from './screens/OnBoardingScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import HomeScreen from './screens/HomeScreen';
import StudentVersionScreen from './screens/StudentVersionScreens';
import TeacherVersionScreen from './screens/TeacherVersionScreen';
import Developer from './screens/Developer';
import ShowErrorScreen from './screens/ShowErrorScreen';

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
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="StudentVersion" component={StudentVersionScreen} />
        <AppStack.Screen name="TeacherVersion" component={TeacherVersionScreen} />
        <AppStack.Screen name="Developer" component={Developer} />
        <AppStack.Screen name="Error" component={ShowErrorScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;