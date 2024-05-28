import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { catagories } from './imageComponent'

const Catagories = () => {
  return (
    <View >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          catagories.map((item, index) =>
            <View key={index} style={{ justifyContent: 'center', alignItems: 'center', padding: 9, margin: 9 }}>
              <TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ height: 40, width: 53, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7e0d2', borderRadius: 12 }}>
                    <Image
                      source={item.image}
                      style={{ width: 26.58, height: 28.29, resizeMode: 'center' }}
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        }

      </ScrollView>
    </View>
  )
}

export default Catagories

const styles = StyleSheet.create({})