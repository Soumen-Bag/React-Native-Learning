import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const HandleTextInputs = () => {
  const[name,setName]=useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Handel Text Input in React Native </Text>
      <Text style={{ fontSize: 24 }}>Your Name is: {name}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text)=> setName(text)}
      />
      <Button title="Clear Input Value" onPress={()=> setName('')}/>
    </View>
  )
}
export default HandleTextInputs;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: '#536a8f',
    borderWidth: 3,
    borderColor: '#52d174',
    margin: 12
  }
})