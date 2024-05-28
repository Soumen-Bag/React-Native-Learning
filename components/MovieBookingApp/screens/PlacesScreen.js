import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { places } from '../assets/component';
import { Place } from '../PlaceContex';

const PlacesScreen = () => {
  const navigation = useNavigation();
  // const [selectedCity, setSelectedCity] = useContext(Place)
  const [city, setCity] = useState();
  const selectCity = (city) => {
    setCity(city);
    setTimeout(() => {
      navigation.navigate("HomeScreen",city)
    },800)
  }

  return (
    <View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: responsiveHeight(7.3),
        width: responsiveWidth(93),
        borderColor: '#E0E0E0',
        borderWidth: 1.4,
        marginVertical: responsiveHeight(2),
        marginHorizontal: responsiveWidth(3.5),
        borderRadius: responsiveWidth(5),
        paddingHorizontal: responsiveWidth(4)
      }}>
        <TextInput
          placeholder='Search your city'
        />
        <Image source={require('../assets/Image/search.png')}
          style={{
            height: responsiveHeight(3),
            width: responsiveWidth(5.7),
            resizeMode: 'contain'
          }}
        />
      </View>

      <View style={{ marginLeft: responsiveWidth(5) }}>
        <View>
          <Text style={{
            fontSize: responsiveFontSize(2.2),
            fontWeight: '600'
          }}>Selected Location</Text>
        </View>
      </View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={places}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity key={index}
              onPress={() => selectCity(item.place)}
              style={{
                marginHorizontal: responsiveWidth(5),
                marginTop: responsiveHeight(2)
              }}
            >
              <ImageBackground
                source={{ uri: item.image }}
                imageStyle={{ borderRadius: responsiveWidth(3) }}
                style={{
                  height: responsiveHeight(12),
                  width: responsiveWidth(38),
                  opacity: 0.8

                }}
              >
                <View style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: responsiveHeight(1),
                  marginLeft: responsiveWidth(2)
                }}>
                  {city===item.place && (
                    <View style={{
                      flex: 1,
                      justifyContent: 'flex-start',
                      marginTop: responsiveHeight(0.7)
                    }}>
                      <Image source={require('../assets/Image/checked.png')}
                        style={{
                          height: responsiveHeight(4),
                          width: responsiveWidth(6),
                          resizeMode: 'contain',
                          tintColor: 'white'
                        }}
                      />
                    </View>
                  )}
                  <Text style={{
                    fontSize: responsiveFontSize(2.1),
                    color: 'white',
                    fontWeight: '700',
                  }}>{item.place}</Text>
                </View>
              </ImageBackground>

            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default PlacesScreen

const styles = StyleSheet.create({})