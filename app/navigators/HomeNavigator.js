import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {StoryScreen} from '../screens/StoryScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} initialRouteName={'Главная'}>
      <Stack.Screen name={'Главная'} component={HomeScreen} />
      <Stack.Screen name={'История'} component={StoryScreen} />
    </Stack.Navigator>
  );
};