import * as React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

//screens

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/Settings';
import FriendsScreen from './screens/Friends';
import AddFriendsScreen from './screens/AddFriends';

// screen names

const homeName = 'Home';
const settingsName = 'Settings';
const friendsName = 'Friends';
const addFriends = 'AddFriends';

const Tab = createBottomTabNavigator();

const SettingsStack = createNativeStackNavigator();

function FriendsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name={friendsName} component={FriendsScreen} />
      <SettingsStack.Screen name={addFriends} component={AddFriendsScreen} />
    </SettingsStack.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={friendsName}
        screenOptions={({route}) => ({
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;

          //   if (route.name === homeName) {
          //     iconName = 'home'

          //   } else if (route.name === settingsName) {
          //     iconName = 'view-dashboard'
          //   }
          //   else if (route.name === friendsName) {
          //     iconName = 'format-list-numbered'
          //   }

          //   return <MaterialIcon name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={friendsName} component={FriendsStackScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
