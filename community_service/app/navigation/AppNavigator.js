import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import FeedNavigator from './FeedNavigator';
import ExploreDetailNavigator from './ExploreDetailNavigator';
import FriendNavigator from './FriendNavigator';
import AccountScreen from '../screens/AccountScreen';

import NewEventButton from './NewEventButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={ FeedNavigator }
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name='home' color={ color } size = { size } />
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ ExploreDetailNavigator }
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewEventButton
              onPress={() => navigation.navigate("Explore")}
            />
          ),
          tabBarIcon: ({ color, size }) =>
            <AntDesign name='rocket1' color={ color } size = { size } />
        })
        }
      />
      <Tab.Screen
        name="Account"
        component={ AccountScreen }
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name='account' color={ color } size = { size } />
        }}
      />
    </Tab.Navigator>
);

export default AppNavigator;