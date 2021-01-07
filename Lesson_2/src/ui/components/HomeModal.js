import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Modal, TouchableHighlight, View, Text, Button, TextInput } from 'react-native';
import * as yup from 'yup';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Camera from '../components/camera';

const schema = yup.object({
    title: yup.string().required().min(4).max(20),
    desc: yup.string().min(10).max(1000)
})

export default function ({ navigation, isModalVisible, showModal, addItemPressHandler }) {
    console.log(isModalVisible);

    return (
        <View >
            <Modal
                style={{ margin: 0 }}
                transparent={true}
                visible={isModalVisible}
                animationType='slide'

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Icon
                                name="close"
                                onPress={() => showModal()}
                                title="Info"
                                color="black"

                                size={30}
                            />
                        </View>

                        <Text style={styles.textStyle}> Create Post</Text>

                        <Formik
                            initialValues={{
                                title: '',
                                desc: '',
                            }}
                            onSubmit={values => {
                                console.log(values);
                                addItemPressHandler(values);
                            }}

                            validationSchema={schema}
                        >

                            {(props) => (
                                <View>
                                    <TextInput
                                        value={props.values.title}
                                        placeholder='Title of your post'
                                        style={styles.textInput}
                                        onChangeText={props.handleChange('title')}
                                    />
                                    { props.touched.title && props.errors.title &&
                                        <Text style={styles.textError}> {props.errors.title}</Text>
                                    }

                                    <TextInput
                                        multiline
                                        onChangeText={props.handleChange('desc')}
                                        value={props.values.desc}
                                        placeholder='Description'
                                        style={styles.textInput}
                                    />
                                    { props.touched.desc && props.errors.desc &&
                                        <Text style={styles.textError}> {props.errors.desc}</Text>
                                    }
                                    <View style={{ margin: 10, width: 30 }}>
                                        <Icon
                                            name='camera'
                                            title='Take photo'
                                            onPress={() => {
                                                // showModal()
                                                navigation.navigate('Camera')
                                                // <Camera />
                                            }}
                                            size={30}
                                        />
                                    </View>

                                    <View style={{ margin: 10 }}>
                                        <Button
                                            title='add'
                                            onPress={props.handleSubmit}
                                        />
                                    </View>

                                </View>
                            )}

                        </Formik>

                    </View>


                </View>
            </Modal>

            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                showModal();
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal> */}

        </View>

    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        marginTop: 200
    },
    textInput: {
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: '#aaa'
    },
    form: {
        margin: 0
    },
    textError: {
        color: 'red'
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'normal'
    }
    ,
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15
    },


});