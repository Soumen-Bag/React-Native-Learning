import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Catagories from './Catagories'
import Specials from './Specials'
import Recommended from './Recommended'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',paddingHorizontal:Dimensions.get("screen").width*0.03 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      {/* menubar cart bar */}
      <View style={{ justifyContent: 'space-between', alignItems:'center', flexDirection: 'row', marginTop: 23,marginHorizontal:25 }}>
        <Image source={require('./Image/menu.png')}  
          style={{ height: 30, width: 30, }}
        />

        <Image source={require('./Image/Cart.png')}
          style={{ height: 34, width: 34, resizeMode: 'center', marginLeft: 5 }}
        />
      </View>

      {/* text */}
      <View style={{ margin: 6, paddingTop: 12,marginBottom: 12,marginLeft: 16,marginTop:-2 }}>
        <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Hi Soumen</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>what do you want to order today?</Text>
      </View>

      {/* search bar */}
      <View style={{
        backgroundColor: '#f7e0d2', borderRadius: 15, flexDirection: 'row',
        marginLeft: 16, marginRight: 30
      }}>
        <View style={{ justifyContent: 'center', marginLeft: 12, }}>
          <Image source={require('./Image/search.png')}
            style={{ height: 23, width: 23 }} />
        </View>
        <View >
          <TextInput placeholder='Search ' style={{ fontWeight: 'bold', marginLeft: 12 }} />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Catagories */}
        <Catagories />

        {/* Specials */}
        <View style={{marginLeft: 16,marginTop: -10}}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Specials</Text>
        </View>
        <Specials />

        <View style={{backgroundColor:'#e35952',justifyContent:'center',alignSelf:'center',flexDirection:'row',borderRadius:13}}>
          <View style={{height:14,width:14,borderRadius:7,backgroundColor:'white',margin:6}}></View>
          <Text style={{color:'white',margin: 4,fontWeight:'500'}}>2 Iteam</Text>
        </View>

        {/* recomnended */}
        <View>
          <Text style={{fontSize: 24,fontWeight:'bold',marginLeft: 17,marginTop:6}}>Recommended</Text>
        </View>
        <Recommended/>
      </ScrollView>




    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})