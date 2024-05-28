import { useState } from "react";
import { ActivityIndicator, Button, Text, Vibration, View } from "react-native";

const ActivityIndicatorLoader = () => {
  const [show, setShow] = useState(false)
  const displayLoader = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false)
    }, 6000)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 34 }}>Activity Indicator</Text>
      <ActivityIndicator size={67} color={'green'} animating={show} />
      {
        show == true ? <ActivityIndicator size={67} color={'blue'} /> : null
      }

      <Button title="show Loader" onPress={displayLoader} />
    </View>
  )
}
export default ActivityIndicatorLoader;