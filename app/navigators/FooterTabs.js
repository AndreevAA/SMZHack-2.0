/*
    Это говно отвечает за то, чтобы рисовался этот всратый футер,
    Я так понимаю он есть на основных двух экранах.
*/

import React, {Component} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {PersonListScreen} from '../screens/PersonListScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {NewsScreen} from '../screens/NewsScreen';
import { View } from 'react-native';
import { RootNavigator } from './NewsNavigator';

const Tab = createBottomTabNavigator();

export class FooterTabs extends Component {
    render = () => {
      return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="News" component={RootNavigator} />
        </Tab.Navigator>
      );
    };
}