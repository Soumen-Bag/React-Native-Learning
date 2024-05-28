import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Credit from '../screens/Credit';
import Wealth from '../screens/Wealth';
import Insurance from '../screens/Insurance';
import History from '../screens/History';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={Home} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

const CreditStack = createNativeStackNavigator();
const CreditStackScreens = () => {
  return (
    <CreditStack.Navigator>
      <CreditStack.Screen name='CreditScreen' component={Credit} options={{ headerShown: false }} />
    </CreditStack.Navigator>
  )
}

const InsuranceStack = createNativeStackNavigator();
const InsuranceStackScreens = () => {
  return (
    <InsuranceStack.Navigator>
      <InsuranceStack.Screen name='InsuranceScreen' component={Insurance} options={{ headerShown: false }} />
    </InsuranceStack.Navigator>
  )
}

const WealthStack = createNativeStackNavigator();
const WealthStackScreens = () => {
  return (
    <WealthStack.Navigator>
      <WealthStack.Screen name='WealthScreen' component={Wealth} options={{ headerShown: false }} />
    </WealthStack.Navigator>
  )
}

const HistoryStack = createNativeStackNavigator();
const HistoryStackScreens = () => {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name='HistoryScreen' component={History} options={{ headerShown: false }} />
    </HistoryStack.Navigator>
  )
}

const Top = createBottomTabNavigator()
const PhonePayNavigation = () => {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen
          name='Home'
          component={HomeStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) =>
              <Image
                source={require('../image/homeWhite.png')}
                style={{
                  height: responsiveHeight(2.6),
                  width: responsiveWidth(5.7),
                  resizeMode: 'contain',
                  tintColor: focused? '#4c165c': 'black'
                }}
              />
          }}
        />

        <Top.Screen
          name='Credit'
          component={CreditStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Credit'
          }}
        />

        <Top.Screen
          name='Insurance'
          component={InsuranceStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Insurance'
          }}
        />

        <Top.Screen
          name='Wealth'
          component={WealthStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Wealth'
          }}
        />

        <Top.Screen
          name='History'
          component={HistoryStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'History'
          }}
        />
      </Top.Navigator>
    </NavigationContainer>
  )
}

export default PhonePayNavigation

const styles = StyleSheet.create({})