import { useState } from "react";
import { Button, Text, View } from "react-native"

const State = () => {

  const [name, setName] = useState("Soumen");

  const testName = () => {
    setName("Gaju")
  }
  return (
    <View>
      <Text style={{ fontSize: 35 }}>{name}</Text>
      <Button
        title="Update Name"
        onPress={() => testName()}
      />
    </View>
  )
}

export default State;