import * as React from 'react';

import {View,Text, Button} from 'react-native';

export default function login({navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <Button title='Login'  onPress={ ()=> {
                navigation.navigate('Otp');
            }}/>
        </View>
    );


}