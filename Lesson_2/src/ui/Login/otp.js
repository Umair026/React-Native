import  React, {useState} from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import OTPInput from 'react-native-otp-textinput';

import { CommonActions } from '@react-navigation/native';


export default function otp({ navigation }) {

    const [otpText, setOtpText] = useState('')
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontWeight: 'bold', fontSize: 26 }}>Otp Screen</Text>
            <OTPInput
                containerStyle={styles.optInput}
                inputCount={4} // total input count
                keyboardType="numeric"
                handleTextChange={(text) => setOtpText(text)}
                textInputStyle={styles.bottomBarTextInput}
            />

            <Text> One values per block.. {otpText}</Text>

            <OTPInput
                containerStyle={styles.optInput}
                inputCount={4} // total input count
                keyboardType="numeric"
                textInputStyle={styles.roundedTextInput}

            />

            <Text> Two values per block..</Text>

            <OTPInput
                containerStyle={styles.optInput}
                inputCount={4} // total input count
                keyboardType="numeric"

                textInputStyle={styles.roundedTextInput}
                inputCellLength={2} // two values per block

            />

            <Button title='go to home screen' onPress={() => {
                // navigation.navigate('HomeStack');
                navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'Home' },
                        ],
                    })
                );
            }} />
        </View>
    );

}

const styles = StyleSheet.create({
    optInput: {
        marginTop: 20,
        marginBottom: 20,
        shadowColor: 'red',
        color: 'red'

    },

    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 3,
    },
    bottomBarTextInput: {
        borderRadius: 2,
        borderBottomColor: '#aaa'
    }
})