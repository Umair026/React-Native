/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';


import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import IconBadge from 'react-native-icon-badge';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './components/LoginScreen'
import ListScreen from './components/ListScreen'
import { DrawerContent } from './components/DrawerContent'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function BadgedNotificationIcon(props) {

  return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
    <IconBadge
      MainElement={
        <View >
          <MaterialIcon
            name="bell-outline"
            onPress={() => navigation.openDrawer()}
            title="Info"
            color="black"
            size={35}
          />
        </View>
      }
      BadgeElement={
        <Text style={{ color: '#fff' }}>{props.test}</Text>
      }
      IconBadgeStyle={
        {
          width: 20,
          height: 20,
          borderWidth: 0.5,
          borderColor: '#409DFF',
          backgroundColor: '#409DFF'
        }
      }

      Hidden={props.test == 0}

    />
  </View>
}

function useBadgeUpdate() {

  const [notificationCount, setNotificationCount] = useState(2)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${notificationCount} times`;
  });

  return [notificationCount, setNotificationCount];

}

function login({ navigation }) {

  const [notificationCount, setNotificationCount] = useState(5)

  function updateCounter() {
    setNotificationCount(notificationCount + 1)
  }

  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      //headerStyle:{ backgroundColor: "#409DFF"},
      headerLeft: () => (
        <MaterialIcon
          name="menu"
          onPress={() => setNotificationCount(notificationCount + 1)}
          title="Info"
          color="black"
          size={30}
        />
      ),
      // headerRight: () => (<BadgedNotificationIcon test={notificationCount} />),

      headerRight: () => (<BadgedNotificationIcon test={notificationCount} />),
      headerTitleStyle: { fontFamily: 'Lora-Italic-VariableFont_wght' }
    }}>
      <Stack.Screen name='Login' component={(
        // props => (<LoginScreen {...props} data={() => setNotificationCount2()} />)
        props => <LoginScreen nav={navigation} />
        // props => <LoginScreen nav={navigation} />
      )}
      />
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  )
}


const list = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  )
}

const App = () => {

  return (

    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Login"
        drawerContent={props => <DrawerContent {...props} />}>

        <Drawer.Screen name="Login" component={login} />
        <Drawer.Screen name="ListScreen" component={list} />
      </Drawer.Navigator>

    </NavigationContainer>

  )
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    flexDirection: 'column',
    margin: 10,
    backgroundColor: '#fff',
  }, scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

