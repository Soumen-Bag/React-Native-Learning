import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalInfo } from './Main'
import SuperChild from './SuperChild';

const Child = () => {
  const {appColor} = useContext(GlobalInfo);
  return (
    <View>
      <Text style={{fontSize:35,color: appColor}}>Child Component</Text>
      <SuperChild/>
    </View>
  )
}

export default Child

const styles = StyleSheet.create({})