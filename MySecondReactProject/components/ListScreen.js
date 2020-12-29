import React from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    View,
    Alert,
    useState,
    FlatList,
    Image,
    StatusBar,
    TouchableOpacity
} from "react-native";


export default function ({ navigation, route }) {

    // const [name,email,password] = route?.params;

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='coral' barStyle='light-content' />

            <Text style={{ fontSize: 16, color: '#coral', alignSelf: "center", marginTop: 20, fontWeight: "bold", textAlign: "center" }}>
                Params ---  Name: {route?.params?.userName} --- Email: {route?.params?.userEmail} --- Password: {route?.params?.userPassword}
            </Text>

            <FlatList style={{ marginTop: 20 }}
                data={
                    [
                        { key: 'Devin', value: "Description of content" },
                        { key: 'Dan', value: "Description of content" },
                        { key: 'Dominic', value: "Description of content" },
                        { key: 'Jackson', value: "Description of content" },
                        { key: 'James', value: "Description of content" },
                        { key: 'Joel', value: "Description of content" },
                        { key: 'John', value: "Description of content" },
                        { key: 'Jillian', value: "Description of content" },
                        { key: 'Joel', value: "Description of content" },
                        { key: 'John', value: "Description of content" },
                        { key: 'Jillian', value: "Description of content" },
                        { key: 'John', value: "Description of content" },
                        { key: 'Jillian', value: "Description of content" },
                        { key: 'Joel', value: "Description of content" },
                        { key: 'John', value: "Description of content" },
                        { key: 'Jillian', value: "Description of content" },
                    ]
                }

                renderItem={
                    ({ item }) =>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.listItem} >
                                <Text style={styles.text}> {item.key} </Text>

                                <Text style={styles.text2}> {item.value}</Text>
                            </View>

                        </TouchableOpacity>

                }
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    text: {
        padding: 2,
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
    },
    text2: {
        padding: 2,
        fontSize: 16,
        color: "#fff",
    },
    listItem: {
        alignItems: 'flex-start',
        padding: 5,
        margin: 2,
        fontSize: 16,
        color: "#fff",
        backgroundColor: "coral"
    }

})