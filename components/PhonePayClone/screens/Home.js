import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import normalize from '../../utils/normalize'
import Header from '../asset/HomeAsset/Header'
import ImageSlider from '../asset/HomeAsset/ImageSlider'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        translucent={false}
        backgroundColor={'#4d0363'}
      />
      {/* header section */}
      <Header/>
      <ScrollView
      style={{
        backgroundColor: '#faf2f8'
      }}
      >
        {/* image slider */}
        <ImageSlider/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})