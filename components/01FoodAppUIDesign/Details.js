import { View, Text, Image, ImageBackground, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

const Details = () => {
  const route = useRoute()
  const navigation=useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#419F7D' }}>
      {/* <ImageBackground source={require('./Image/detailsBackgroundimg.png')}
        style={{ height: widthPercentageToDP(62), width: heightPercentageToDP(55),}}
      > */}

      {/* back buttom and cart buttom */}
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        paddingHorizontal: Dimensions.get('screen').width * 0.06,
        marginTop: Dimensions.get('screen').height * 0.03
      }}>
        <TouchableOpacity style={{}} onPress={() =>navigation.goBack()}>
          <Image source={require('./Image/backIcon.png')}
            style={{ height: heightPercentageToDP(3), width: widthPercentageToDP(4) }}
          />
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={require('./Image/Cart.png')}
            style={{ height: heightPercentageToDP(4), width: widthPercentageToDP(5) }}
          />
        </TouchableOpacity>
      </View>

      {/* details photo */}
      <View style={{
        flex: 1, backgroundColor: 'white',
        borderTopLeftRadius: 30, borderTopRightRadius: 30, opacity: 0.95,
        marginTop: Dimensions.get('screen').height * (0.21)
      }}>
        <View style={{
          justifyContent: 'center', alignItems: 'center',
          marginTop: Dimensions.get('screen').height * (-0.16)
        }}>
          <Image source={route.params.image}
            style={{ height: heightPercentageToDP(37), width: widthPercentageToDP(68) }}
          />
        </View>

        {/* details about food */}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: Dimensions.get('screen').width * 0.04,
          marginRight: Dimensions.get('screen').width * 0.03,
          marginTop: Dimensions.get('screen').height * 0.001
        }}>
          <Text style={{ fontWeight: 'bold',fontStyle:'italic'}}>{route.params.details}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, paddingLeft: 18 }}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: 'bold',color:'black' }}>{route.params.name}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>300/530 kcal</Text>
            <Text style={{ fontWeight: '700' }}>Price: <Text style={{ fontWeight: 'normal' }}>${route.params.price}</Text></Text>
          </View>
          <View>
            <Text style={{ fontWeight: '900' }}>1 portion</Text>
          </View>
        </View>

        {/* restrurent name */}
        <View style={{
          flexDirection: 'row', padding: 12,
          marginLeft: Dimensions.get('screen').width * 0.01,
          marginRight: Dimensions.get('screen').width * 0.01,
          justifyContent: 'space-between'
        }}>
          <Image source={require('./Image/restrurentName.png')}
            style={{ height: heightPercentageToDP(7), width: widthPercentageToDP(10) }}
          />
          <View style={{ marginRight: Dimensions.get('screen').width * 0.087 }}>
            <Text style={{ fontWeight: 'bold' }}>Chin Club</Text>
            <Text>3.1 km from you</Text>
          </View>
          <View>
            <FlatList
              data={Array(5)}
              horizontal
              renderItem={() => {
                return (
                  <Image source={require('./Image/star.png')}
                    style={{
                      height: heightPercentageToDP(3),
                      width: widthPercentageToDP(5),
                      margin: 3
                    }}
                  />
                )
              }}
            />
          </View>
        </View>

        {/* add cart and quantity */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 12,
          marginLeft: Dimensions.get('screen').width * 0.017,
          marginRight: Dimensions.get('screen').width * 0.019
        }}>
          <TouchableOpacity style={{
            backgroundColor: '#419F7D',
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(24),
            borderRadius: 14,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white' }}>Add to cart</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./Image/plus.png')}
              style={{
                height: heightPercentageToDP(3),
                width: widthPercentageToDP(6)
              }}
            />
          </TouchableOpacity>
        </View>

      </View>
    </View >
  )
}

export default Details