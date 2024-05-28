import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const MakeListFromAPIwithDeleteAndUpdate = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    try {
      const url = "http://192.168.19.115:3000/user";
      let result = await fetch(url);
      result = await result.json();
      if (result) {
        setData(result);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  useEffect(() => {
    getAPIData();
  }, [])
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Make List From API with DeleteAndUpdate</Text> */}
      {
        data.length ?
          data.map((item) => {
            return (
              <View style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View>
                  <Text>{item.age}</Text>
                </View>
                <View>
                  <Text>{item.email}</Text>
                </View>
              </View>
            )
          })
          : null
      }
    </View>
  )
}

export default MakeListFromAPIwithDeleteAndUpdate

const styles = StyleSheet.create({})