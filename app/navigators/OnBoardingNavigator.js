import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreenComp} from '../screens/LoginScreen';
import {OnBoardingScreen} from '../screens/OnBoardingScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {FooterTabs} from './FooterTabs';

import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

const Stack = createStackNavigator();

export const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Onboarding'}
        screenOptions={{
            headerShown: false
        }}>
      <Stack.Screen name={'Onboarding'} component={OnBoardingScreen} />
      <Stack.Screen name={'Login'} component={LoginScreenComp} />
      <Stack.Screen name={'HomeNav'} component={FooterTabs} />
    </Stack.Navigator>
  );
};