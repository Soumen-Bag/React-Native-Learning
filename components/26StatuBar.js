import { useState } from "react";
import { Button, StatusBar, View } from "react-native"

const StatusBars = () => {
  const [hide, setHide] = useState(false);
  const [barStyles, setBarStyles] = useState("default")
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StatusBar
        backgroundColor={'orange'}
        barStyle={barStyles}
        hidden={hide}
      />
      <Button title="Toggle Status Bar"
        onPress={() => setHide(!hide)}
      />
      <Button title="Update style"
        // color={'green'}
        onPress={()=> setBarStyles("dark-content")}
      />
    </View>
  )
}
export default StatusBars;