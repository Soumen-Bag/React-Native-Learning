import { useState } from "react";
import { View,Text,Button, TextInput } from "react-native";
const Login = (props) => {
  const [name,setName]=useState("");
  const age= 23;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightpink'
      }}
    >
      <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Login page</Text>
      <TextInput placeholder="Enter name"
        style={{fontSize: 26,borderColor:'black',borderWidth: 2,backgroundColor: '#b3f0ad'}}
        onChangeText={(text)=> setName(text)}
      />
      <Button title='go to home page'
        onPress={() => props.navigation.navigate("Home1",{name,age})}

      />
    </View>
  )
}
export default Login;