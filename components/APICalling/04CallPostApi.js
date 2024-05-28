import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CallPostApi = () => {
  

  const saveAPIData = async () => {
    //console.log("hg");
    const data = {
      name: "Rabin",
      age: 32,
      email: 'rabin45@gmail.com',
    }
    //const url = "http://localhost:3000/user";
    const url = "http://192.168.19.115:3000/user"; 
    try {
      let result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      result = await result.json();
      console.warn(result);
    } catch (error) {
      console.error(error)
    }
  };
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Call Post API</Text>
      <Button title='Save Data' onPress={saveAPIData} />
    </View>
  )
}

export default CallPostApi

const styles = StyleSheet.create({})