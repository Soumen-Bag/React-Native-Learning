import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ingredientsIteam } from './imageComponent'

const Ingredients = () => {
  return (
    <View>
      <Text style={{
        fontSize: responsiveFontSize(3.2),
        fontWeight: 'bold',
        color: 'black',
        marginLeft: responsiveWidth(4)
      }}>Ingredients</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ingredientsIteam}
        renderItem={({ item, index }) => {
          return (
            <View
              key={index}
              style={{
                borderRadius: responsiveWidth(2),
                borderWidth: responsiveWidth(0.04), 
                marginLeft: responsiveWidth(3.7),
                marginTop: responsiveHeight(2),
                paddingHorizontal: responsiveWidth(2.2),
                paddingVertical: responsiveWidth(2)
              }}
            >
              <Image source={item.image}
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(11),
                  resizeMode: 'contain',
                }}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default Ingredients

const styles = StyleSheet.create({})