import * as React from 'react';

import { TextInput, StyleSheet, View, Text, Button, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import { min } from 'react-native-reanimated';
// import { TextInput } from 'react-native-gesture-handler';


const LoginSchema = yup.object({
    userName: yup.string()
        .required('Please enter user name!')
        .min(4),

    email: yup.string()
        .required()
        .min(4),

    mobile: yup.string()
        .required()
        .min(11)
        .max(11)
});
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
            validationSchema={LoginSchema}

        >

            {(props) => (
                <View style={styles.container}>

                    <TextInput
                        value={props.values.userName}
                        placeholder='user name'
                        style={styles.textInput}
                        onChangeText={props.handleChange('userName')}
                    />

                    { props?.touched?.userName && props?.errors?.userName &&
                        <Text style={styles.textError}> {props?.errors?.userName}</Text>
                    }


                    <TextInput
                        value={props.values.email}
                        placeholder='email address'
                        style={styles.textInput}
                        onChangeText={props.handleChange('email')}
                    />
                    { props?.touched?.email && props?.errors?.email &&
                        <Text style={styles.textError}> {props?.errors?.email}</Text>
                    }

                    <TextInput
                        value={props.values.mobile}
                        placeholder='03'
                        style={styles.textInput}
                        keyboardType='numeric'
                        onChangeText={props.handleChange('mobile')}
                    />

                    { props?.touched?.mobile && props?.errors?.mobile &&
                        <Text style={styles.textError}> {props?.errors?.mobile}</Text>
                    }


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
    },
    textError:{
        color: 'red'
    }

})