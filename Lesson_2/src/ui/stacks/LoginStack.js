import React from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Login/login';
import Otp from '../Login/otp';
import DrawerStack from './DrawerStack';

const Stack = createStackNavigator();

export default function LoginStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Otp" component={Otp} />
                <Stack.Screen name="Home" component={DrawerStack} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );



}   
