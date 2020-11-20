import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ProjectsScreen from '../screens/ProjectsScreen';
import DetailScreen from '../screens/DetailScreen';
import { ScreensNavigatorParamList } from '../types/types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const HomeStack = createStackNavigator<ScreensNavigatorParamList>();

export default function ScreensNavigator() {
  const colorScheme = useColorScheme();
  return (
    <HomeStack.Navigator
      initialRouteName="Projects"
      screenOptions={{ headerStyle: { backgroundColor: Colors[colorScheme].tint } }}
    >
      <HomeStack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ headerTitle: 'Projects', headerStyle: { backgroundColor: Colors[colorScheme].tint } }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerTitle: 'Detail', headerStyle: { backgroundColor: Colors[colorScheme].tint } }}
      />
    </HomeStack.Navigator>
  );
}
