import { Component } from "react";
import { Button, Text, TextInput, View } from "react-native"

class PropsStateInClassComponent extends Component {
    constructor(){
        super();
        this.state={
            name: 'Soumen',
            age: 23
        }
    }

    updateName(val){
        this.setState({name : val})
    }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 32, color: 'red'}}>{this.state.name}</Text>
        <Text style={{ fontSize: 32, color: 'red'}}>{this.state.age}</Text>
        <TextInput
          placeholder="Enter your name"
          style={{fontSize: 16,backgroundColor: 'lightblue',margin: 7,padding: 6}}
          onChangeText={(text)=>this.updateName(text)}
        />
        <Button title="Submit" onPress={this.fruit}/>
      </View>
    )
  }
}

export default PropsStateInClassComponent;