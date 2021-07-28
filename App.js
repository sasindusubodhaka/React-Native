import React from 'react';
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (

  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />

  </HomeStack.Navigator>

);
const DetailStackScreen = ({ navigation }) => (

  <DetailStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailStack.Screen name="Details" component={DetailScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25}
            backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}
    />

  </DetailStack.Navigator>

);
const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

}
export default App;