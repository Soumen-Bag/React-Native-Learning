import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { GlobalInfo } from './Main'

const OthersChild = () => {
  const {appColor} = useContext(GlobalInfo);
  return (
    <View>
      <Text style={{fontSize:35,color: appColor}}>Otherschild Component</Text>
    </View>
  )
}

export default OthersChild

const styles = StyleSheet.create({})