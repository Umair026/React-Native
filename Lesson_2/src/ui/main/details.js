import React from 'react';
import {StyleSheet,View,Text,Button,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardView from '../components/CardView'
import FadeInView from '../components/fadeInView';

export default function Details({ route }) {

    const { title,desc, image } = route.params;
    
    return(
        <ScrollView>
            <FadeInView style={styles.detailsContainer}>
            <Image style={styles.image} source={{uri: image}} />
            <CardView style={styles.card}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.paragraph}>
                {desc}
            </Text>
            </CardView>
        </FadeInView>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    detailsContainer:{
        flex: 1,
        backgroundColor: '#fff'
    }, card:{
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    paragraph: {
        margin: 10,
        fontSize: 20
    },
})