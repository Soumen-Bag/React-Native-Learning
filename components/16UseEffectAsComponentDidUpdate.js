import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native"

const UseEffectAsComponentDidUpdate = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(() => {
    console.log("Do some animation")
  }, [count])

  useEffect(() => {
    console.log("call some API here");
  }, [data])
  return (
    <View>
      <Text style={{ fontSize: 29 }}>{data} UseEffect As Component DidUpdate {count}</Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <User info={{count,data}}/>
    </View>
  )
}

const User=(props)=>{
  console.log(props.info);

  useEffect(()=>{
    console.warn("run this code when the data prop is updated")
  },[props.info.data])

  useEffect(()=>{
    console.warn("run this code when the count prop is updated")
  },[props.info.count])

  return(
    <View>
      <Text style={{fontSize: 28,color: 'red'}}>Data:{props.info.data}</Text>
      <Text style={{fontSize: 28,color: 'red'}}>Count:{props.info.count}</Text>
    </View>
  )
}
export default UseEffectAsComponentDidUpdate;