/*
    Это говно отвечает за то, чтобы можно было гулять между листом новостей
    и самими новостями.
    Пока новостей тут нет. Но есть то, куда их запихнуть.
*/

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'News'}>
      <Stack.Screen name={'News'} component={PersonListScreen} />
      <Stack.Screen name={'Meh'} component={PersonInfoScreen} />
    </Stack.Navigator>
  );
};