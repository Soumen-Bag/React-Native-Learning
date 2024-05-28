import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { catagoriesItem } from '../assets/imageComponent'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Catagories = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={catagoriesItem}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity key={index}
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            height: responsiveWidth(17),
            width: responsiveWidth(44),
            borderRadius: responsiveWidth(9), 
            backgroundColor:item.color,
            marginLeft: responsiveWidth(4),
            //padding: responsiveWidth(2),
            marginTop: responsiveHeight(4),
            paddingHorizontal: responsiveWidth(6),
            paddingVerticalL: responsiveHeight(2)
          }}>
            <Image source={item.image}
              style={{
                height: responsiveHeight(7.4),
                width: responsiveWidth(21),
                resizeMode:'contain',
                marginRight: responsiveWidth(3)
              }}
            />
            <Text style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: 'bold',
              color: 'black',
              marginRight: responsiveWidth(2)
            }}>{item.name}</Text>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default Catagories

const styles = StyleSheet.create({})