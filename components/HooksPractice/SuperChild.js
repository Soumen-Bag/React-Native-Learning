import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalInfo } from './Main'

const SuperChild = () => {
  const {appColor,getDay} = useContext(GlobalInfo);
  const day="sunday"; 
  return (
    <View>
      <Text style={{fontSize:35,color: appColor}}>Superchild Component</Text>
      <Button title='Press me'onPress={()=>getDay(day)}/> 
    </View>
  )
}

export default SuperChild

const styles = StyleSheet.create({})