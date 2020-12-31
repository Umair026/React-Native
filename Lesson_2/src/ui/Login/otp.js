import * as React from 'react';

import {View,Text,Button} from 'react-native';

export default function otp({navigation}) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Otp Screen</Text>
            <Button title='go to home screen' onPress={ ()=> {
                navigation.navigate('HomeStack');
            }} />
        </View>
    );


}