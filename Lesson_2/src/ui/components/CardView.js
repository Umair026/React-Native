import React from 'react';
import { StyleSheet, View, } from 'react-native';


export default function (props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardItems}>
                {props.children}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 6,
        marginVertical: 10,
        padding: 10,
        elevation: 5,
        
    },
    cardItem:{
        margin: 10
    }
}); 