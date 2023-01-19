import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Register from '../screens/Register';
import Verification from '../screens/Verification';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import OtpMobile from '../screens/OtpMobile';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
      <Stack.Screen
        name="OtpMobile"
        component={OtpMobile}
        options={{ headerShown: false, animation: 'slide_from_left' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
