import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import { StyleSheet, Image, TouchableHighlight, View, Text, Button, TextInput } from 'react-native';
import * as yup from 'yup';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const schema = yup.object({
    title: yup.string().required().min(4).max(20),
    desc: yup.string().min(10).max(1000)
})

export default function ({ navigation, hide, showDialog, addItemPressHandler }) {
    console.log(hide);
    if (hide) {
        return null;
    } else {

        const [imageUri, setImageUri] = useState('')

        function setCapturedImageUri(uri){
            console.log("received: "+uri);
            setImageUri(uri);
            console.log("actual: "+imageUri);
        }

        return (
            <View style={styles.parent} >
                <View style={styles.child}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={styles.textStyle}> Create Post</Text>

                                <View style={{ }}>
                                    <Icon
                                        name="close"
                                        onPress={() => showDialog(false)}
                                        title="Info"
                                        color="black"

                                        size={30}
                                    />
                                </View>


                            </View>


                            <Formik
                                initialValues={{
                                    title: '',
                                    desc: '',
                                    image: ''
                                }}
                                onSubmit={values => {
                                    console.log(values);
                                    if(imageUri != ''){
                                        values.image = imageUri;
                                    } else {
                                        values.image = 'https://image.shutterstock.com/image-photo/islamabad-pakistan-april-25-2019-260nw-1407461093.jpg';
                                    }
                                    //values.image = imageUri;
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
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <View style={{ margin: 10, width: 30 }}>
                                            <Icon
                                                name='camera'
                                                title='Take photo'
                                                onPress={() => {
                                                    // showModal()
                                                    navigation.navigate('Camera', { callback: setCapturedImageUri })
                                                    // <Camera />
                                                }}
                                                size={30}
                                            />
                                        </View>


                                        <Image style={{ width: 50, height: 50}} source={{ uri: imageUri}} />

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
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%',
        borderColor: '#eee',
        position: 'absolute'
    },
    child: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '80%',
        elevation: 30
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'normal'
    },
    textInput: {
        margin: 5,
        borderWidth: 1,
        padding: 5,
        borderColor: '#aaa'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%',
        opacity: 0.99,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 15,
        alignSelf: 'center',
        position: 'absolute',
        top: 60
    }

});