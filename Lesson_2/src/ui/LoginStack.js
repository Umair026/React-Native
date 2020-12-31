import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login/login';
import Otp from './Login/otp';
import HomeStack from './HomeStack';

const Stack = createStackNavigator();

export default function LoginStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="HomeStack" component={HomeStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );



}   
