import React, { useState, useContext } from 'react';
import { Appbar, TouchableRipple } from 'react-native-paper';

import { StyleSheet, View, Text, Button } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Switch } from 'react-native-gesture-handler';
import LanguageContext from '../hooks/languageHook';
import { setLocal, strings } from '../../i18n';


export default function ({ navigation }) {

    const [locale, toggle] = React.useState(false)
    const { language, setLanguage } = useContext(LanguageContext)

    const toggleSwitch = () => {
        toggle(!locale);

        if (!locale) {
            console.log('setLanguage(urdu)');
            setLanguage('urdu');
            setLocal('urdu');
        } else {
            console.log('setLanguage(en)');
            setLanguage('en');
            setLocal('en');
        }

        console.log('------------');
        
    }

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
                <Text style={styles.headerText}>{strings('header')}</Text>
            </View>

            {/* <MaterialIcon
                name="bell"
                title="Info"
                onPress={() => {
                    setLocal('en');
                    // navigation.navigate('Home');
                } }
                color="black"
                size={30}
            /> */}

            <TouchableRipple onPress={() => toggleSwitch()}>
                <View style={{ 
                    flexDirection: 'row',
                     alignItems: 'center',
                     borderWidth: 0.5,
                     borderRadius: 4,
                     padding: 3,
                     marginEnd: 3
                     }} >

                <Text>{language}</Text>
                    <View pointerEvents='none'>
                        <Switch value={locale} />
                    </View>

                   
                </View>
            </TouchableRipple>

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