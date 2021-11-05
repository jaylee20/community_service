import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EventSelectionScreen from '../screens/EventSelectionScreen';
import ExploreNavigator from './ExploreNavigator';

const Stack = createStackNavigator();

const ExploreDetailNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="EventSelection" component={ EventSelectionScreen } options={{headerShown: false}}/>
    <Stack.Screen name="ExploreEvent" component={ ExploreNavigator } options={{headerShown: false}}/>
  </Stack.Navigator>
)

export default ExploreDetailNavigator;