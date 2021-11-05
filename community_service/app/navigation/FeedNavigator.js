import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventsScreen from '../screens/EventsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Events" component={ EventsScreen } />
    <Stack.Screen name="EventDetails" component={ EventDetailsScreen } options={{headerShown: false}}/>
  </Stack.Navigator>
)

export default FeedNavigator;