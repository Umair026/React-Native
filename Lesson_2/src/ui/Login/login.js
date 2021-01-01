import * as React from 'react';

import { TextInput, StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import { min } from 'react-native-reanimated';
// import { TextInput } from 'react-native-gesture-handler';

export default function login({ navigation }) {

    return (
        <Formik
            initialValues={{
                userName: '',
                mobile: '',
                emai: ''
            }

            }
            onSubmit={values => Alert.alert(JSON.stringify(values))}
            
        >

            {(props) => (
                <View style={styles.container}>

                    <TextInput
                        value={props.values.userName}
                        placeholder='user name'
                        style={styles.textInput}
                        onChangeText={props.handleChange('userName')}
                    />

                    <TextInput
                        value={props.values.email}
                        placeholder='email address'
                        style={styles.textInput}
                        onChangeText={props.handleChange('email')}
                    />

                    <TextInput
                        value={props.values.mobile}
                        placeholder='mobile no'
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={props.handleChange('mobile')}
                    />
                    <View style={{ marginTop: 20 }}>
                        <Button title='submit'
                            onPress={props.handleSubmit} />
                    </View>

                </View>

            )}



        </Formik>

    );


}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        marginTop: 10,
        borderRadius: 8
    },
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    }

})