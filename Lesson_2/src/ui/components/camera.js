import React, { useState } from 'react';
import { StyleSheet, Text, Modal, Button, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';



export default function ({ navigation, route }) {

    const { myData } = route;
    const [isVisible, setVisibility] = useState(true)
    var { TemporaryDirectoryPath } = require('react-native-fs');

    let camera = '';
    const takePicture = async () => {
        if (camera) {
            const options = { quality: 0.5, base64: true, path: TemporaryDirectoryPath + Math.random() + '.jpg' };
            const data = await camera.takePictureAsync(options);
            console.log(data.uri);

            // myData(data.uri);
            // navigation.goBack();
            // await AsyncStorage.setItem('@imageURI', data.uri);
            navigation.goBack();



            // navigation.fun(data.uri);
        }
    };

    function updateVisibility() {
        setVisibility(!isVisible)
    }

    return (
        <View style={styles.container}>
            <RNCamera
                ref={ref => {
                    camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={takePicture.bind(this)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});