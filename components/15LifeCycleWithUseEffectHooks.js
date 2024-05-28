import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"

const LifeCycleWithUseEffectHooks = () => {
  const [count,setCount]=useState(0)
  useEffect(() => {
    console.warn("hello")
  },[])
  return (
    <View>
      <Text style={{ fontSize: 34 }}>Life Cycle With UseEffect Hooks {count}</Text>
      <Button title="Update" onPress={()=>setCount(count+1)}/>
    </View>
  )
}
export default LifeCycleWithUseEffectHooks;