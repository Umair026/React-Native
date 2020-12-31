import React from 'react';


import {View,Text,Button} from 'react-native';

export default function () {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Home screen' onPress={ ()=> {
                navigation.navigate('');
            }} />
        </View>
    );
}