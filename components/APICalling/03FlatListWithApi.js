import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const FlatListWithApi = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const result = await fetch(url);
      const result1 = await result.json();
      setData(result1);
    } catch (error) {
      console.error("Error fetching data: ",error)
    }
  }

  useEffect(() => {
    getApi();
  }, [])
  return (
    <View>
      <Text style={{fontSize:34}}>FlatList With Api</Text>
      {
        data.length ?
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return (
                <View 
                style={{
                  padding: 12,
                  borderBottomColor:"#ccc",
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
          : null
      }
    </View>
  )
}

export default FlatListWithApi

const styles = StyleSheet.create({})