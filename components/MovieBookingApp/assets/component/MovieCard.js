import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const MovieCard = ({ item }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={{
        //marginHorizontal: responsiveWidth(5),
        marginTop: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(3)
      }}>
        <Image source={{ uri: item.image }}
          style={{
            height: responsiveHeight(31),
            aspectRatio: 2 / 3,
            borderRadius: responsiveWidth(2.5)
          }}
        />
        <Text style={{
          fontSize: responsiveFontSize(1.7),
          fontWeight: '600',
          color: '#656968'
        }}>{item.name}</Text>
        <Text style={{
          fontSize: responsiveFontSize(2),
          fontWeight: '500',
          color: '#b7bdbc'
        }}>U/A . {item.language}</Text>
        <TouchableOpacity style={{
          backgroundColor: '#f5bc2c',
          height: responsiveHeight(4),
          width: responsiveWidth(18),
          borderRadius: responsiveWidth(2),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: responsiveHeight(1)
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: '600',
            fontSize: responsiveFontSize(1.7)
          }}>BOOK</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MovieCard

const styles = StyleSheet.create({})