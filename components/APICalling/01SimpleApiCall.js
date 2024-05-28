import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SimpleApiCall = () => {
  const [data, setData] = useState(undefined)
  const getApi = async () => {
    //api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const result = await fetch(url);
    const result1 = await result.json();
    setData(result1);
  }
  useEffect(() => {
    getApi();
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}> SimpleApiCall</Text>
      {
        data ? <View>
          <Text style={{fontSize:28}}>{data.id}</Text>
          <Text style={{fontSize:28}}>{data.title}</Text>
        </View> : null
      }
    </View>
  )
}

export default SimpleApiCall

const styles = StyleSheet.create({})