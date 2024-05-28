import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Catagories from '../assets/catagories'
import NewProduct from '../assets/NewProduct'
import { Picker } from '@react-native-picker/picker'

const HomeScreen = () => {
  const [selectCityName, setSelectCityName] = useState('Delhi')
  const [cityName] = useState(
    [
      'Delhi',
      'Mumbai',
      'Kolkata',
      'Pune',
      'Chennai',
      'Hydrabad',
      'Bengalore',
      'Kochi'
    ].sort()
  )
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'white' }}>
      <SafeAreaView style={{
      }}>
        <View style={{}}>
          {/* search and menu bar */}
          <View style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: responsiveWidth(3),
            marginLeft: responsiveWidth(2.7)
          }}>
            <TouchableOpacity>
              <Image source={require('../Images/1.png')}
                style={{
                  height: responsiveHeight(8),
                  width: responsiveWidth(11),
                }}
              />
            </TouchableOpacity>
            <Picker
              selectedValue={selectCityName}
              onValueChange={(item) => {
                setSelectCityName(item)
              }}
            >
              {
                cityName.map((l) => (
                  <Picker.Item label='l' value={l} />
                ))
              }
            </Picker>
            <TouchableOpacity>
              <Image source={require('../Images/search.png')}
                style={{
                  height: heightPercentageToDP(4),
                  width: widthPercentageToDP(7),
                  tintColor: 'black',
                  marginRight: responsiveWidth(1)
                }}
              />
            </TouchableOpacity>
          </View>

          {/* front text */}
          <View style={{
            marginTop: responsiveHeight(0),
            marginLeft: responsiveWidth(4.3)
          }}>
            <Text style={styles.textStyle}>Food that </Text>
            <Text style={styles.textStyle}>meet your needs</Text>
          </View>

          {/* catagories */}
          <Catagories />


          {/* new product text */}
          <View style={{
            marginTop: responsiveHeight(3),
            marginLeft: responsiveWidth(4.3)
          }}>
            <Text style={{
              fontSize: responsiveFontSize(4.3),
              fontWeight: 'bold',
              color: 'black'
            }}>New Product</Text>
          </View>
          {/* new product */}
          <NewProduct />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black'
  }
})