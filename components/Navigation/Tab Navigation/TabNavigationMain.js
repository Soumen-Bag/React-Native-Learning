import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const TabNavigationMain = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Login'component={Login}/>
        <Tab.Screen name='Sign Up'component={SignUp}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const Login = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <Text style={{fontSize: 34}}>Login</Text>
    </View>
  )
}

const SignUp = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
      <Text style={{fontSize: 34}}>Sign Up</Text>
    </View>
  )
}

export default TabNavigationMain

const styles = StyleSheet.create({})