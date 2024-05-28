import { View, Text, Platform } from 'react-native'
import React from 'react'

export default function CheckPlatfrom() {
  return (
    <View>
      <Text style={{fontSize: 34}}>Platfrom: {Platform.OS}</Text>
      {
        Platform.OS=="android" ?
        <View style={{height: 100,width: 100,backgroundColor:'green'}}></View>
        :
        <View style={{height: 100,width: 100,backgroundColor:'red'}}></View>
      }
    </View>
  )
}