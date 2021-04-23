/*
    Это говно отвечает за то, чтобы можно было гулять между листом новостей
    и самими новостями.
    Пока новостей тут нет. Но есть то, куда их запихнуть.
*/

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {PersonListScreen} from '../screens/PersonListScreen';
import {PersonInfoScreen} from '../screens/PersonInfoScreen';

const Stack = createStackNavigator();

export const NewsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Новости'}>
      <Stack.Screen name={'Новости'} component={PersonListScreen} />
      <Stack.Screen name={'Новость'} component={PersonInfoScreen} />
    </Stack.Navigator>
  );
};