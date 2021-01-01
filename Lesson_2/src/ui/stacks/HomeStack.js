import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../main/home';
import Details from '../main/details';
import Header from '../components/header';

const Stack = createStackNavigator();

export default function ({navigation}) {
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name='Home' component={Home}
                options={
                    {
                        header: () => <Header navigation={navigation}/>,
                    }
                } />
            <Stack.Screen name='Details' component={Details} />
        </Stack.Navigator>
    );
}