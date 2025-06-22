import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/settingsScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
         tabBarSafeAreaInsets: { bottom: 5 },
        tabBarStyle: {
          backgroundColor: '#f8f8f8',
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Todos') {
            iconName = focused ? 'check-circle' : 'check-circle-outline';
            return <MaterialIcons name={iconName} size={24} color={color} />;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
            return <Ionicons name={iconName} size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="Todos" component={StackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
