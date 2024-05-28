import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './LoginScreen';
import Header from './Header';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'red'
          },
          headerTitleStyle: {
            fontSize: 27
          }
        }}
      >
        <Stack.Screen name='Login Page' component={Login}
          options={{
            headerTitle:(props)=> <Button title='left '/>,
            headerRight: ()=><Header/>,
            title: "Login User",
            headerStyle: {
              backgroundColor: '#e3e081'
            },
            headerTitleStyle: {
              fontSize: 24
            }
          }}
        />
        <Stack.Screen name='Home1' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default StackNavigation;

const styles = StyleSheet.create({})