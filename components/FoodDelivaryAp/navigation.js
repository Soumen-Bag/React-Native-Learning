import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screen/HomeScreen';
import Details from './screen/details';

const Stacks = createNativeStackNavigator();
const FoodAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stacks.Screen name='HomeScreen' component={HomeScreen}/>
        <Stacks.Screen name='details' component={Details}/>
      </Stacks.Navigator>
    </NavigationContainer>
  )
}

export default FoodAppNavigation;

const styles = StyleSheet.create({})