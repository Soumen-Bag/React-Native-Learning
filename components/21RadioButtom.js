import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const RadioButtom = () => {
  const [selectRadio, setSelectRadio] = useState(1);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={()=> setSelectRadio(1)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.radio}>
            {
              selectRadio === 1 ? <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setSelectRadio(2)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.radio}>
            {
              selectRadio === 2 ? <View style={styles.radioBg}></View> : null
            }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 21,
  },
  radio: {
    height: 38,
    width: 38,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 19,
    margin: 8,
  },
  radioBg: {
    backgroundColor: 'black',
    height: 26,
    width: 26,
    borderRadius: 20,
    margin: 3
  }
})
export default RadioButtom;