import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import Details from '../main/details';

const Drawer = createDrawerNavigator();

export default function (){
    return(
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home' component={HomeStack} />
            </Drawer.Navigator>
    );
}