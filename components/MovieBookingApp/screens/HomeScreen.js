import { Animated, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, useAnimatedValue } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Header from '../assets/component/Header';
import { movieName } from '../assets/component';
import MovieCard from '../assets/component/MovieCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [city, setCity] = useState(route.params);
  const isFocus = useIsFocused();
  useEffect(() => {
    setCity(route.params);
    //  console.log(city);
  })
  //console.log(city);
  const moveAnimation = new Animated.Value(0);
  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: -30,
        duration: 2000,
        useNativeDriver: true
      })
    ).start()
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text style={{ fontWeight: '500' }}>Hello Soumen Bag</Text>,
      headerStyle: {
        backgroundColor: '#F5F5F5',
        shadowColor: "transparent",
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3
      },
      headerRight: () => (
        <TouchableOpacity style={{
          flexDirection: 'row',
          gap: responsiveWidth(2.5),
          alignItems: 'center'
        }}>
          <Image source={require('../assets/Image/bell.png')}
            style={{
              height: responsiveHeight(3),
              width: responsiveWidth(6),
              resizeMode: 'contain'
            }}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Places')}>
            <Image source={require('../assets/Image/location.png')}
              style={{
                height: responsiveHeight(3),
                width: responsiveWidth(6),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Places')}>
            <Animated.Text
              style={[
                styles.text,
                {
                  transform: [{ translateX: moveAnimation }]
                }
              ]}>
              <Text style={{ fontWeight: '600' }}>{city == undefined ? 'Kolkata' : city}</Text>
            </Animated.Text>
          </TouchableOpacity>
        </TouchableOpacity >
      )
    }, [])
  })
    return (
    <View>
      <FlatList
        ListHeaderComponent={Header}
        data={movieName}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item, index }) => 
          <MovieCard item={item}  key={index}/>}
      />
    </View>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: responsiveFontSize(2),
  }
})