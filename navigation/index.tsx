import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types/types';
import ScreensNavigator from './ScreensNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import LoginScreen from '../screens/LoginScreen';
import { useSelector } from 'react-redux';
import LoginDuck from '../redux/login/login.duck';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const isLogged: boolean = useSelector(LoginDuck.getIsSignedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLogged ? (
        <Stack.Screen name="Root" component={ScreensNavigator} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign in!' }} />
      )}
    </Stack.Navigator>
  );
}
