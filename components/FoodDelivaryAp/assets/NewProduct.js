import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { newProductItem } from './imageComponent'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const NewProduct = () => {
  const navigation = useNavigation();
  return (
    <View style={{marginTop: responsiveHeight(1)}}>
      <FlatList
        data={newProductItem}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity key={index}
              style={{
                backgroundColor: '#e6f5f3',
                margin: responsiveWidth(2),
                height: responsiveHeight(45),
                width: responsiveWidth(46),
                borderRadius: responsiveWidth(6),
                marginLeft: responsiveWidth(3),
                marginTop: index%2==1? responsiveHeight(4): 0
              }}
              onPress={() => navigation.navigate('details',item)}>
              <View style={{ alignItems: 'center', paddingTop: responsiveHeight(2.5) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                  <Image source={require('../Images/3.png')}
                    style={{
                      height: responsiveWidth(8),
                      width: responsiveWidth(6),
                      marginRight: responsiveWidth(2.8)
                    }}
                  />
                  <Text style={{
                    fontSize: responsiveFontSize(2.6),
                    fontWeight: 'bold',
                    color: 'black'
                  }}>290 Calories</Text>
                </View>
                <Image source={item.image}
                  style={{
                    height: responsiveWidth(29),
                    width: responsiveWidth(39),
                    resizeMode:'contain',
                    marginTop: responsiveHeight(3.4)
                  }}
                />
              </View>
              <View style={{
                marginLeft: responsiveWidth(3),
                marginTop: responsiveHeight(2.6)
              }}>
                <Text style={{
                  fontSize: responsiveFontSize(3.5),
                  fontWeight: 'bold',
                  color: 'black'
                }}>{item.des}</Text>
                <Text style={{
                  fontSize: responsiveFontSize(2.8),
                  fontWeight: 'bold',
                }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default NewProduct

const styles = StyleSheet.create({})