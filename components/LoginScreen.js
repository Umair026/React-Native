import React, { useState } from "react";
import {
    Keyboard,
    Button,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    View,
    Alert,
    StatusBar,
    TouchableWithoutFeedback
} from "react-native";


export default function LoginScreen({ nav, clickHandler }) {
    const [userName, setUserName] = useState([]);
    const [userEmail, setUserEmail] = useState([]);
    const [userPassword, setUserPassword] = useState([]);

    const onButtonClick = () => {
        ToastAndroid.show(userName + "", ToastAndroid.SHORT);
    };

    const showToast = () => {
        ToastAndroid.show(userName, ToastAndroid.SHORT);
    };

    // const setNotificationCount = props.getParam(setNotificationCount);
    // const notificationCount = props.getParam(notificationCount);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <View style={styles.container}>
                <StatusBar backgroundColor='#409DFF' barStyle='light-content' />
                <Text style={styles.heading}> Signin to you account </Text>

                <Text style={styles.label}> Enter User Name </Text>
                <TextInput style={styles.textInput}
                    placeholder='e.g. Mr. Smith'
                    onChangeText={val => {
                        setUserName(val)
                        // showToast(val)
                    }} />

                <Text style={styles.label}> Enter Email </Text>
                <TextInput style={styles.textInput} placeholder='e.g. smith@gmail.com'
                    onChangeText={val => {
                        setUserEmail(val)
                        // showToast(val)
                    }} />


                <Text style={styles.label}> Enter Password </Text>
                <TextInput style={styles.textInput}
                    placeholder='e.g.***'
                    onChangeText={val => {
                        setUserPassword(val)
                        // showToast(val)
                    }} />

                <Text style={styles.label}> {userName} </Text>
                <Text style={styles.label}> {userEmail} </Text>
                <Text style={styles.label}> {userPassword} </Text>



                <View style={{ marginTop: 20 }}>
                    <Button
                        title='Sign In'
                        onPress={() => nav.navigate('ListScreen', {
                            'userName': userName,
                            'userEmail': userEmail,
                            'userPassword': userPassword
                        })

                            // props.data()
                            // funct()
                        }
                    />
                </View>


                <Text style={styles.forgot} onPress={() => {
                    Alert.alert("Forgot", " Reset Link sent to your email",
                        [

                            {
                                text: 'cancel',
                                style: 'cancel'
                            },
                            {
                                text: 'Ok'
                            },
                        ],
                        { cancelable: false });
                }}> forgot password ?</Text>


                <View style={{ marginTop: 40 }}>
                    <Button
                        title='Create you account'
                        // onPress={() => clickHandler() }
                    />
                </View>


                {/* <StatusBar style="auto" /> */}
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#fff',
    },

    heading: {
        alignSelf: "center",
        fontSize: 30,
        fontFamily: 'Lora-Italic-VariableFont_wght',
        marginTop: 10,
        marginBottom: 20
    },
    label: {
        fontFamily: 'Lora-Italic-VariableFont_wght',
        marginTop: 10
    },
    textInput: {
        marginTop: 5,
        fontFamily: 'Lora-Italic-VariableFont_wght',
        borderColor: '#777',
        padding: 5,
        borderWidth: 1
    },
    button: {
        marginTop: 20
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    forgot: {
        fontFamily: 'Lora-Italic-VariableFont_wght',
        alignSelf: "center",
        marginTop: 10
    }
});