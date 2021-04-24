/*
    Это говно отвечает за то, чтобы рисовался этот всратый футер,
    Я так понимаю он есть на основных двух экранах.
*/

import React, {Component} from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/HomeScreen';
import { NewsNavigator } from './NewsNavigator';
import {ProfileNavigator} from "./ProfileNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export class FooterTabs extends Component {
    render = () => {
      return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#4CA64B',
            inactiveTintColor: 'gray',
        }} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Главная') {
                    iconName = 'home';
                } else if (route.name === 'Новости') {
                    iconName = 'newspaper';
                } else if (route.name === 'Профиль') {
                    iconName = 'person-circle-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}>
            <Tab.Screen name="Главная" component={HomeScreen}/>
            <Tab.Screen name="Новости" component={NewsNavigator} />
            <Tab.Screen name="Профиль" component={ProfileNavigator} />
        </Tab.Navigator>
      );
    };
}