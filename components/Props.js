import { useState } from "react"
import { Button, Text, View } from "react-native"

const Props = () => {
  const[name,setName]=useState("Soumen");
  return (
    <View>
      <Text style={{ fontSize: 34 }}>Props in React Native</Text>
      <Button title="Update Props" onPress={()=>setName("Gaju")} />
      <User nam={name} age={29} />
    </View>
  )
}

const User = (props) => {
  return (
    <View style={{ backgroundColor: 'lightgreen', padding: 6 }}>
      <Text style={{ fontSize: 28 }}>Name: {props.nam}</Text>
      <Text style={{ fontSize: 28 }}>Age: {props.age}</Text>
    </View>
  )
}

export default Props;