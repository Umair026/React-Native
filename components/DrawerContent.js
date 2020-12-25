import React from 'react'

import { View, StyleSheet } from 'react-native'
import { Avatar, Drawer, Text, Title, Caption, Paragraph, TouchableRipple } from 'react-native-paper'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Switch } from 'react-native-gesture-handler';


const CustomHeader = () =>  
{

    return(
        <View>
            <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                                }}
                                size={50}
                            />

                            <View style={{ marginLeft: 15 }}>
                                <Title style={{fontFamily : 'Lora-VariableFont_wght.ttf'}}>
                                    Umair IRshad</Title>
                                <Caption>uumair@gmail.com</Caption>
                            </View>

                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ margin: 5 }}>
                            <Paragraph>80</Paragraph>
                            <Caption>followers</Caption>
                        </View>

                        <View style={{ margin: 5 }}>
                            <Paragraph>152</Paragraph>
                            <Caption>followings</Caption>
                        </View>
                    </View>
        </View>
    )
}

const CustomMenuAction = () => 
{
    return(
        <View>
            <Drawer.Section style={styles.bottomDrawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label='Home'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label='Profile'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label='Bookmarks'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label='Settings'
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    size={size}
                                    color={color}
                                />
                            )}
                            label='Support'
                            onPress={() => { }}
                        />

                    </Drawer.Section>
        </View>
    )
}




export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const DrawerPreferences = () => {
        return (
            <Drawer.Section title='Preferences'>
                            <TouchableRipple onPress={() => toggleTheme()}>
                                <View style={styles.preferences} >
                                    <Text> Dark theme</Text>
                                    <View pointerEvents='none'>
                                        <Switch  value={isDarkTheme} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
        )
    } 



    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>

                <View style={{ padding: 10 }}>

                    <CustomHeader />
                    
                    <CustomMenuAction />

                    <DrawerPreferences />

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            size={size}
                            color={color}
                        />
                    )}
                    fontFamily= 'Lora-Italic-VariableFont_wght'
                    label='Sign Out'
                    onPress={() => { }}
                />

            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#777',
        borderTopWidth: 1
    },
    preferences: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'space-between'

        
    }

})