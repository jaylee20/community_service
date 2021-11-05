import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CardScreen from '../screens/CardScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import EventSelectionScreen from '../screens/EventSelectionScreen';

const Stack = createStackNavigator();

const ExploreNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Add Events" component={ CardScreen } />
    <Stack.Screen name="EventDetails" component={ EventDetailsScreen } options={{headerShown: false}}/>
  </Stack.Navigator>
)

export default ExploreNavigator;