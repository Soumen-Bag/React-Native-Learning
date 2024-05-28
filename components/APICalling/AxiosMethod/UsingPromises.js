import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const UsingPromisesForApi = () => {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setMyData(res.data))
      .catch((err)=>console.warn(err));
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

export default UsingPromisesForApi

const styles = StyleSheet.create({})