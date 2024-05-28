import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import normalize from '../utils/normalize'

const PostAPIwithInputField = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveAPIData = async () => {
    if (!name) {
      setNameError(true)
    }else{
      setNameError(false)
    }
    if (!age) {
      setAgeError(true)
    }else{
      setAgeError(false)
    }
    if (!email) {
      setEmailError(true)
    }else{
      setEmailError(false)
    }

    if (!name) {
      return false;
    }
    if (!age) {
      return false;
    }
    if (!email) {
      return false;
    }

    const url = "http://192.168.19.115:3000/user";
    try {
      let result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, email })
      })
      result = await result.json();

      console.warn(result);
      if (result) {
        console.warn("data added")
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Post API with Input Field</Text>
      <TextInput
        placeholder='Enter your name'
        style={{
          //height: normalize(),
          width: '90%',
          borderColor: 'blue',
          borderWidth: 1,
          paddingLeft: normalize(8),
          marginLeft: normalize(6),
          marginTop: normalize(12)
        }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {
        nameError ?
          <Text
            style={{
              marginLeft: normalize(6),
              marginTop: normalize(1),
              color: 'red'
            }}
          >Please enter Valid name</Text>
          : null
      }
      <TextInput
        placeholder='Enter your age'
        style={{
          //height: normalize(),
          width: '90%',
          borderColor: 'blue',
          borderWidth: 1,
          paddingLeft: normalize(8),
          marginLeft: normalize(6),
          marginTop: normalize(17)
        }}
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {
        ageError ?
          <Text
            style={{
              marginLeft: normalize(6),
              marginTop: normalize(1),
              color: 'red'
            }}
          >Please enter Valid age</Text>
          : null
      }
      <TextInput
        placeholder='Enter your email'
        style={{
          //height: normalize(),
          width: '90%',
          borderColor: 'blue',
          borderWidth: 1,
          paddingLeft: normalize(8),
          marginLeft: normalize(6),
          marginTop: normalize(17),
          //marginBottom: normalize()
        }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {
        emailError ?
          <Text
            style={{
              marginLeft: normalize(6),
              marginTop: normalize(1),
              color: 'red'
            }}
          >Please enter Valid email</Text>
          : null
      }
      <View 
      style={{
        marginTop: normalize(17)
      }}>
        <Button title='Save Data' onPress={saveAPIData} />
      </View>
    </View>
  )
}

export default PostAPIwithInputField

const styles = StyleSheet.create({})