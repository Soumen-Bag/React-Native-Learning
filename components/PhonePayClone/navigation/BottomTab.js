import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {COLORS, Fonts, ICONS} from '../themes/Themes';
// import normalize from '../utils/helpers/normalize';
// import Home from '../screens/Customer/Home';
// import Category from '../screens/Customer/Category';
// import Shop from '../screens/Customer/Shop';
// import Profile from '../screens/Customer/Profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: normalize(60),
          borderTopWidth: normalize(1),
          borderTopColor: '#EFEFEF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.Home}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Black : COLORS.inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(11.5),
                  fontFamily: Fonts.PoppinsRegular,
                  color: focused ? COLORS.Black : COLORS.inactive,
                  marginTop: normalize(2),
                }}>
                Home
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.Category}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Black : COLORS.inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(11.5),
                  fontFamily: Fonts.PoppinsRegular,
                  color: focused ? COLORS.Black : COLORS.inactive,
                  marginTop: normalize(2),
                }}>
                Category
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.Shop}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Black : COLORS.inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(11.5),
                  fontFamily: Fonts.PoppinsRegular,
                  color: focused ? COLORS.Black : COLORS.inactive,
                  marginTop: normalize(2),
                }}>
                Shop
              </Text>
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <>
              <Image
                source={ICONS.Profile}
                style={{
                  height: normalize(18),
                  width: normalize(18),
                  resizeMode: 'contain',
                  tintColor: focused ? COLORS.Black : COLORS.inactive,
                }}
              />
              <Text
                style={{
                  fontSize: normalize(11.5),
                  fontFamily: Fonts.PoppinsRegular,
                  color: focused ? COLORS.Black : COLORS.inactive,
                  marginTop: normalize(2),
                }}>
                Profile
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
