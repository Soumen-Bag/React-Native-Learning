import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { sepecials } from './imageComponent'
import { useNavigation } from '@react-navigation/native'

const Specials = () => {
  const navigation = useNavigation()
  return (
    <View>
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          sepecials.map((item, index) =>
            <View key={index}>
              <TouchableOpacity>
                <View style={{backgroundColor:'#f7e0d2',margin: 18,padding: 11,borderRadius: 15,marginRight:18,marginLeft:17}}>
                  <Image source={item.image}
                  style={{width: 130,height: 130,marginTop:-25,marginLeft: -29}} />
                  <View>
                    <Text style={{fontSize: 19,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontWeight: 'bold'}}>${item.price}</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:21}}>
                    <Text style={{fontSize: 14,fontWeight:'bold'}}>See Details</Text>
                    <View style={{backgroundColor:'blue',height: 16,width:16,borderRadius:8,marginLeft:30}}></View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>)
        }
      </ScrollView> */}
      <FlatList 
      horizontal
      showsHorizontalScrollIndicator={false}
      data={sepecials} renderItem={({item,index})=>{
        return(
          <TouchableOpacity key={index} onPress={()=>navigation.navigate("Details",item)}>
                <View style={{backgroundColor:'#f7e0d2',margin: 18,padding: 11,borderRadius: 15,marginRight:18,marginLeft:17}}>
                  <Image source={item.image}
                  style={{width: 130,height: 130,marginTop:-25,marginLeft: -29}} />
                  <View>
                    <Text style={{fontSize: 19,fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{fontWeight: 'bold'}}>${item.price}</Text>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:21}}>
                    <Text style={{fontSize: 14,fontWeight:'bold'}}>See Details</Text>
                    <View style={{backgroundColor:'blue',height: 16,width:16,borderRadius:8,marginLeft:30}}></View>
                  </View>
                </View>
              </TouchableOpacity>
        )
      }} />
    </View>
  )
}

export default Specials

const styles = StyleSheet.create({})