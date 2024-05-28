import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { recommendedItem } from './imageComponent';

const Recommended = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
      {
        recommendedItem.map((item,index)=>
        <View key={index}>
          <TouchableOpacity>
            <View style={{marginTop:5}}>
              <Image source={item.image}
                style={{height:80,width:100,margin: 6,marginLeft: 15}}
              />
            </View>
          </TouchableOpacity>
        </View>)
      }

      </ScrollView>
    </View>
  )
}

export default Recommended;

const styles = StyleSheet.create({})