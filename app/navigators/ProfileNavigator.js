import {createStackNavigator} from "@react-navigation/stack";
import {BlankScreen} from "../screens/BlankPage";
import {NewsItemView} from "../screens/NewsWebViewScreen";
import * as React from 'react';
import {ProfileScreen} from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'Новости'}>
            <Stack.Screen name={'Профиль'} component={ProfileScreen} />
            <Stack.Screen name={'История заказов'} component={BlankScreen} />
            <Stack.Screen name={'Настройки'} component={BlankScreen} />
            <Stack.Screen name={'Выйти'} component={BlankScreen} />
        </Stack.Navigator>
    );
};