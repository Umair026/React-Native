import React from 'react';
import DrawerContent from '../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import Details from '../main/details';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function () {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'
                drawerContent={props => <DrawerContent {...props} />}
            >
                <Drawer.Screen name='Home' component={HomeStack} />
                <Drawer.Screen name='Details' component={Details} />
            </Drawer.Navigator>

        </NavigationContainer>

    );
}