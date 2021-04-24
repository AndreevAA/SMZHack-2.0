import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../screens/HomeScreen';
import {StoryScreen} from '../screens/StoryScreen';

const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }} initialRouteName={'Дом'}>
      <Stack.Screen name={'Дом'} component={HomeScreen} />
      <Stack.Screen name={'Story'} component={StoryScreen} />
    </Stack.Navigator>
  );
};