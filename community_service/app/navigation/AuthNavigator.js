import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AppNavigator from './AppNavigator';

import colors from '../reusable_styles/colors';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={ WelcomeScreen }
        options={{
          headerShown: false
        }}/>
      <Stack.Screen
        name='Login'
        component={ LoginScreen }
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.lightGrey,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='Register'
        component={ RegisterScreen }
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.lightGrey,
          },
          headerTintColor: colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name='AppNavigator'
        component={ AppNavigator }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator;