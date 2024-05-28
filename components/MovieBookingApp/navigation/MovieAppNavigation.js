import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import PlacesScreen from '../screens/PlacesScreen'

const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen} options={{title:''}} />
      <HomeStack.Screen name='Places' component={PlacesScreen}/>
    </HomeStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

const Top = createBottomTabNavigator()
const MovieAppNavigation = () => {
  return (
    <NavigationContainer>
      <Top.Navigator>
        <Top.Screen
          name='Home'
          component={HomeStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarLabelStyle: { color: 'black' },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={require('../assets/Image/homeBlack.png')}
                  style={{
                    height: responsiveHeight(2.6),
                    width: responsiveWidth(5.9),
                    resizeMode: 'contain'
                  }}
                />
              ) : (<Image source={require('../assets/Image/homeWhite.png')}
                style={{
                  height: responsiveHeight(2.6),
                  width: responsiveWidth(5.9),
                  resizeMode: 'contain'
                }}
              />)
          }}
        />

        <Top.Screen
          name='Profile'
          component={ProfileStackScreens}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarLabelStyle: { color: 'black' },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image source={require('../assets/Image/userBlack.png')}
                  style={{
                    height: responsiveHeight(2.7),
                    width: responsiveWidth(5.9),
                    resizeMode: 'contain'
                  }}
                />
              ) : (<Image source={require('../assets/Image/userWhite.png')}
                style={{
                  height: responsiveHeight(2.7),
                  width: responsiveWidth(5.9),
                  resizeMode: 'contain'
                }}
              />)
          }}

        />
      </Top.Navigator>
    </NavigationContainer>
  )
}

export default MovieAppNavigation

const styles = StyleSheet.create({})