import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {OnBoardingScreen} from '../screens/OnBoardingScreen';
import {FooterTabs} from './FooterTabs';

import { EntryScreen } from '../screens/EntryScreen';
import { BlankScreen } from '../screens/BlankPage';

const Stack = createStackNavigator();

export const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Onboarding'}
        screenOptions={{
            headerShown: false
        }}>
      {/* <Stack.Screen name={'Onboarding'} component={OnBoardingScreen} /> */}
      <Stack.Screen name={'Entry'} component={EntryScreen} />
      <Stack.Screen name={'HomeNav'} component={FooterTabs} />
    </Stack.Navigator>
  );
};