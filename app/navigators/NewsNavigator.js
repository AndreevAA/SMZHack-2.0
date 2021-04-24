/*
    Это говно отвечает за то, чтобы можно было гулять между листом новостей
    и самими новостями.
    Пока новостей тут нет. Но есть то, куда их запихнуть.
*/

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NewsListScreen} from '../screens/PersonListScreen';
import {NewsItemView} from '../screens/NewsWebViewScreen';

const Stack = createStackNavigator();

export const NewsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} initialRouteName={'Новости'}>
      <Stack.Screen name={'Новости'} component={NewsListScreen} />
      <Stack.Screen name={'Новость'} component={NewsItemView} />
    </Stack.Navigator>
  );
};