import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ingredients from '../assets/ingredients';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [count, setCount] = useState(1);
  return (
    <View style={{ backgroundColor: 'white' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}>

        {/* back button favarite */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: responsiveWidth(3)
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../Images/2.png')} />
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row'
          }}>
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
          <Image source={require('../Images/heart1.png')}
            style={{
              height: responsiveHeight(5),
              width: responsiveWidth(9),
              resizeMode: 'contain',
              tintColor: '#f5d72c'
            }}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={route.params.image}
            style={{
              height: responsiveHeight(38),
              width: responsiveWidth(87),
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* quantity */}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: responsiveHeight(2)
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5faf9',
            height: responsiveHeight(7),
            width: responsiveWidth(37),
            borderRadius: responsiveWidth(7)
          }}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Image source={require('../Images/plus.png')}
                style={{
                  height: responsiveWidth(3.3),
                  width: responsiveWidth(3.3),
                  resizeMode: 'contain',
                  marginRight: responsiveWidth(6)
                }}
              />
            </TouchableOpacity>
            <Text style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: responsiveFontSize(2.5),
              marginRight: responsiveWidth(6)
            }}>{count}</Text>
            <TouchableOpacity onPress={() => count > 0 ? setCount(count - 1) : 0}>
              <Image source={require('../Images/minus.png')}
                style={{
                  height: responsiveWidth(3.3),
                  width: responsiveWidth(3.3),
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* item name price */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: responsiveWidth(4)
        }}>
          <View>
            <Text style={{
              fontSize: responsiveFontSize(4),
              fontWeight: 'bold',
              color: 'black'
            }}>{route.params.des}</Text>
            <Text style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: 'bold',
            }}>{route.params.name}</Text>
          </View>
          <View>
            <Text style={{
              fontSize: responsiveFontSize(4),
              fontWeight: 'bold',
              color: 'black'
            }}>${route.params.price}</Text>
          </View>
        </View>

        {/* ingredients */}
        <Ingredients />

        {/* details */}
        <Text style={{
          fontSize: responsiveFontSize(3),
          fontWeight: 'bold',
          color: 'black',
          marginLeft: responsiveWidth(4),
          marginTop: responsiveHeight(2)
        }}>Details</Text>
        <Text style={{
          textAlign: 'justify',
          fontWeight: 'bold',
          color: '#a4a4a9',
          marginHorizontal: responsiveWidth(4),
          marginTop: responsiveHeight(1.5)
        }}>{route.params.details}</Text>
      </ScrollView>

      {/* cart icon */}
      <TouchableOpacity style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: responsiveHeight(1.7),
        backgroundColor: '#000',
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderRadius: responsiveWidth(7.5),
      }}>
        <Image source={require('../Images/cart.png')}
          style={{
            height: responsiveWidth(8),
            width: responsiveWidth(8),
            resizeMode: 'contain',
            tintColor: 'white'
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Details;

const styles = StyleSheet.create({})