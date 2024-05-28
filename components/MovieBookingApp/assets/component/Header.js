import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Header = () => {
  return (
    <View style={{marginBottom:responsiveHeight(6.5)}}>
      <ImageBackground
        source={{
          uri: 'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00022376.jpg?v=4',
        }}
        style={{
          height: responsiveHeight(24),
          width: responsiveWidth(100),
        }}

      >
          <TouchableOpacity style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            height:responsiveHeight(11),
            width:'90%',
            borderRadius: responsiveWidth(2.7),
            top: responsiveHeight(19),
            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent:'space-between',
            alignItems:'center',
            paddingHorizontal: responsiveWidth(3)
          }}>
            <View>
              <Text style={{fontSize: responsiveFontSize(2.1),fontWeight: '500',color:'#bfbbb2'}}>Releasing in 1 days</Text>
              <Text style={{fontSize: responsiveFontSize(2.2),fontWeight:'700',color:'#6e6b66'}}>CUSTODY</Text>
              <Text style={{fontSize: responsiveFontSize(2.3),fontWeight:'500',color:'#bfbbb2'}}>U/A . TELUGU</Text>
            </View>
            <TouchableOpacity style={{
              backgroundColor:'#f5bc2c',
              height: responsiveHeight(5),
              width: responsiveWidth(20),
              borderRadius: responsiveWidth(2),
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Text style={{
                textAlign:'center',
                fontWeight:'600',
                fontSize: responsiveFontSize(2)
              }}>BOOK</Text>
            </TouchableOpacity>
          </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})