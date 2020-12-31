import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './main/home';

const Drawer = createDrawerNavigator();

export default function (){
    return(
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={Home} />
            </Drawer.Navigator>
    );
}