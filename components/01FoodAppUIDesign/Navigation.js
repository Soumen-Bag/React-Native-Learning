import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen';
import Details from './Details';

Stacks = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stacks.Screen name='Home' component={HomeScreen} />
        <Stacks.Screen name='Details' component={Details} />
      </Stacks.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})