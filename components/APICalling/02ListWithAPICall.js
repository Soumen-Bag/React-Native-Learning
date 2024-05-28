import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ListWithAPICall = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const result = await fetch(url);
    const result1 = await result.json();
    setData(result1);
  }

  useEffect(() => {
    getApi();
  })
  return (
    <View>
      <Text>List with api</Text>
      <ScrollView>
        {
          data.length ?
            data.map((item, index) => {
              return (
                <View key={index}
                  style={{
                    padding: 10,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                  }}
                >
                  <Text style={{ fontSize: 24 }}>ID: {item.id}</Text>
                  <Text style={{ fontSize: 24 }}>Title: {item.title}</Text>
                  <Text style={{ fontSize: 24 }}>Body: {item.body}</Text>

                </View>
              )
            })
            : null
        }
      </ScrollView>
    </View>
  )
}

export default ListWithAPICall

const styles = StyleSheet.create({})