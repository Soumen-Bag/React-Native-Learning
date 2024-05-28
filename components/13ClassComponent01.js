import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native"

class ClassComponent extends Component {
  fruit=()=>{
    console.warn("Apple")
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 32, color: 'red'}}>Class Component</Text>
        <TextInput
          placeholder="Enter your name"
          style={{fontSize: 16,backgroundColor: 'lightblue',margin: 7,padding: 6}}
        />
        <Button title="Submit" onPress={this.fruit}/>
      </View>
    )
  }
}

export default ClassComponent;