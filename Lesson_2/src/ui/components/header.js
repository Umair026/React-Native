import React from 'react';
import { Appbar } from 'react-native-paper';

import { StyleSheet, View, Text, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ({ navigation }) {
    return (
        <View style={styles.header}>

            <MaterialIcon
                name="menu"
                onPress={() => navigation.openDrawer()}
                title="Info"
                color="black"
                size={30}
            />

            <View>
                <Text style={styles.headerText}> Custom Header</Text>
            </View>

            <MaterialIcon
                name="bell"
                onPress={() => navigation.openDrawer()}
                title="Info"
                color="black"
                size={30}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        justifyContent: 'space-between',
        elevation: 5

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333',

    }
});