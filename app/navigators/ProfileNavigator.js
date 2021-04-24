import {createStackNavigator} from "@react-navigation/stack";
import {NewsItemView} from "../screens/NewsWebViewScreen";
import * as React from 'react';
import {ProfileScreen} from "../screens/ProfileScreen";
import {OrderHistoryScreen} from "../screens/OrderHistoryScreen";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator         screenOptions={{
            headerShown: false
        }} initialRouteName={'Профиль'} >
            <Stack.Screen name={'Профиль'} component={ProfileScreen} />
            <Stack.Screen name={'История заказов'} component={OrderHistoryScreen} />
            <Stack.Screen name={'Настройки'} component={ProfileScreen} />
            <Stack.Screen name={'Выйти'} component={ProfileScreen} />
        </Stack.Navigator>
    );
};