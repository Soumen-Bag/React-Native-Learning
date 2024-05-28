import React from "react";
import { Button, Text, View } from "react-native";

const ButtonOnPressEvent = () => {

  const fruit = (val) => {
    console.warn(val);
  }
  return (
    <View>
      <Text style={{ fontSize: 35 }}>Button On press event</Text>
      <Button
        title="onPress"
        onPress={() => fruit("Hello")}
        color={'green'}
      />

      <Button
        title="onPress 2"
        onPress={fruit}
        color={'red'}
      />
    </View>
  )
}

export default ButtonOnPressEvent;