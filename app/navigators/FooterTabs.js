/*
    Это говно отвечает за то, чтобы рисовался этот всратый футер,
    Я так понимаю он есть на основных двух экранах.
*/

import React, {Component} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/HomeScreen';
import { NewsNavigator } from './NewsNavigator';

const Tab = createBottomTabNavigator();

export class FooterTabs extends Component {
    render = () => {
      return (
        <Tab.Navigator>
            <Tab.Screen name="Главная" component={HomeScreen}/>
            <Tab.Screen name="Новости" component={NewsNavigator} />
        </Tab.Navigator>
      );
    };
}