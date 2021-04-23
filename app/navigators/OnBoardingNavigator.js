import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/LoginScreen';
import {OnBoardingScreen} from '../screens/OnBoardingScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {FooterTabs} from './FooterTabs';


const Stack = createStackNavigator();

export const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Onboarding'}
        screenOptions={{
            headerShown: false
        }}>
      <Stack.Screen name={'Onboarding'} component={OnBoardingScreen} />
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Home'} component={FooterTabs} />
    </Stack.Navigator>
  );
};