import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const InstallNPM = () => {
  return (
    <WebView source={{uri: "https://reactnative.dev/"}}/>
  )
}

export default InstallNPM

const styles = StyleSheet.create({})