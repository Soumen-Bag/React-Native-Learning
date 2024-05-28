import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const UsingAsyncAwaitForApi = () => {
  const [myData, setMyData] = useState([])

  const getApis = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(response.data)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getApis();
  }, [])
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text>UsingPromises</Text>
      <FlatList
        data={myData}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 12,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1
              }}
            >
              <Text style={{ fontSize: 20 }}>ID: {item.id}</Text>
              <Text style={{ fontSize: 20 }}>Title: {item.title}</Text>
              <Text style={{ fontSize: 20 }}>Body: {item.body}</Text>
            </View>
          )
        }}
      />

    </View>
  )
}

export default UsingAsyncAwaitForApi;

const styles = StyleSheet.create({})