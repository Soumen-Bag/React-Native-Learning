import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TopTabNavigationMain = () => {
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

export default TopTabNavigationMain

const styles = StyleSheet.create({})