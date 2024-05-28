import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"

const UseEffectForUnmountComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{ fontSize: 29 }}>UseEffect for Unmount Component</Text>
      <Button title="Toogle" onPress={()=> setShow(!show)} />
      {
        show == true ? <User /> : null
      }
    </View>
  )
}

const User = () => {
  let timer=setInterval(()=>{
    console.warn("timer called")
  },2000)

  useEffect(()=>{
    return()=>
      clearInterval(timer)
  })
  return (
    <View>
      <Text style={{ fontSize: 23, color: 'green' }}>User Component</Text>
    </View>
  )
}
export default UseEffectForUnmountComponent;