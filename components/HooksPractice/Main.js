import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'
import Child from './Child'
import OthersChild from './OthersChild';

export const GlobalInfo = createContext();

const UseContextaPractice = () => {
  const [color, setColor] = useState('red')
  const [day,setDay]=useState("Monday")
  const getDay=(item)=>{
    setDay(item)
  }
  return (
    <GlobalInfo.Provider value={{ appColor: color ,getDay: getDay}}>
      <View>
        <Text style={{ fontSize: 38 }}>Main Component {day}</Text>
        <Child />
        <OthersChild/>
      </View>
    </GlobalInfo.Provider >
  )
}

export default UseContextaPractice

const styles = StyleSheet.create({})