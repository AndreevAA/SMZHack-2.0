import {createStackNavigator} from "@react-navigation/stack";
import {NewsListScreen} from "../screens/PersonListScreen";
import {NewsItemView} from "../screens/NewsWebViewScreen";
import * as React from 'react';
import {ProfileScreen} from "../screens/ProfileScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'Новости'}>
            <Stack.Screen name={'Профиль'} component={ProfileScreen} />
            <Stack.Screen name={'История заказов'} component={NewsItemView} />
            <Stack.Screen name={'Настройки'} component={NewsItemView} />
            <Stack.Screen name={'Выйти'} component={NewsItemView} />
        </Stack.Navigator>
    );
};