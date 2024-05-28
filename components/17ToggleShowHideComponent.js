import { useState } from "react"
import { Button, Text, View } from "react-native"

const ToggleShowHideComponent = () => {
  const [show, setShow] = useState(true)
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Show/Hide Component</Text>
      {/* <Button title="Hide Component" onPress={() => setShow(false)} />
      <Button title="Show Component" onPress={() => setShow(true)} /> */}
      <Button title="Toggle Component" onPress={() => setShow(!show)} />
      {
        show == true ? <User /> : null
      }
    </View>
  )
}

const User = () => {
  return (
    <View>
      <Text style={{ fontSize: 29, color: 'red' }}>User Component</Text>
    </View>
  )
}
export default ToggleShowHideComponent