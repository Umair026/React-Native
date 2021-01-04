import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Modal, View, Text, Button, TextInput } from 'react-native';
import * as yup from 'yup';

const schema = yup.object({
    title: yup.string().required().min(4).max(20),
    desc: yup.string().min(10).max(1000)
})

export default function ({ test, showModal, addItemPressHandler }) {
    console.log(test);

    return (
        <Modal style={{ margin: 0 }} visible={test}>
            <View >
                <View style={{ margin: 10, alignItems: 'flex-end' }}>
                    <Button title='Close' onPress={() => showModal()}
                    />
                </View>
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
                        <View style={styles.form}>
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
                                onChangeText={props.handleChange('desc')}
                                value={props.values.desc}
                                placeholder='Description'
                                style={styles.textInput}
                            />
                            { props.touched.desc && props.errors.desc &&
                                <Text style={styles.textError}> {props.errors.desc}</Text>
                            }
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
        </Modal>
    );
}

const styles = StyleSheet.create({
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
        margin: 5
    },
    textError:{
        color: 'red'
    },
    field: {

    }
});