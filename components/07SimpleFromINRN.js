import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const SimpleFromINRN = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passward, setPassword] = useState('');
  const [display,setDisplay]=useState(false);

  const resetFromData=()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPassword("")
  }
  return (
    <View>
      <Text style={{ fontSize: 34 }}>Simple from in React Native</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInput}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        placeholder="Enter Your Email"
        style={styles.textInput}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Enter Your Password"
        style={styles.textInput}
        secureTextEntry={true}
        value={passward}
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.buttonStyle}>
        <Button
          title="Print Details"
          style={styles.buttonStyle}
          onPress={()=>setDisplay(true)}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title="Clear Details"
          style={styles.buttonStyle}
          color={'green'}
          onPress={resetFromData}
        />
      </View>
      <View>
        {
          display ?
            <View>
              <Text style={{fontSize:25}}>Your Name is: {name}</Text>
              <Text style={{fontSize:25}}>Your Email is: {email}</Text>
              <Text style={{fontSize:25}}>Your Password is: {passward}</Text>
            </View>
            : null
        }
      </View>
    </View>
  )
}
export default SimpleFromINRN;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: '#536a8f',
    borderWidth: 3,
    borderColor: '#52d174',
    margin: 12,
  },
  buttonStyle: {
    padding: 9,
    marginBottom: 14,
    paddingLeft: 47,
    paddingRight:47
  }
})