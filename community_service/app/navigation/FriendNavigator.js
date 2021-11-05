import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FriendsScreen from '../screens/FriendsScreen';
import AccountScreen from '../screens/AccountScreen';

import colors from '../reusable_styles/colors';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Friends"
      component={ FriendsScreen }
      options={{
        title: '',
      }}
    />
    <Stack.Screen
      name="Account"
      component={ AccountScreen }
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
  </Stack.Navigator>
)

export default FeedNavigator;