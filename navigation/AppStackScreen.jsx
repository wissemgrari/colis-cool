import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PackageScreen from '../screens/PackageScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import { TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

const AppStackScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => (
          <View
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
              <Feather
                name='user'
                size={28}
                color='#fff'
                style={{
                  textAlign: 'center',
                  backgroundColor: '#5D4AB4',
                  padding: 10,
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#433582',
                }}
              />
            </TouchableOpacity>
          </View>
        ),
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#5D4AB4' },
        tabBarInactiveTintColor: '#FFFFEB',
        tabBarActiveTintColor: '#FFFF00',
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Packages'
        component={PackageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='box' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Schedule'
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='calendar' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
0;

export default AppStackScreen;
