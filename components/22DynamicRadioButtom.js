import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const DynamicRadioButtom = () => {
  const skills = [
    {
      id: 1,
      name: "Java"
    },
    {
      id: 2,
      name: "PHP"
    },
    {
      id: 3,
      name: "Node"
    },
    {
      id: 4,
      name: "SQL"
    }
  ]

  const [selectRadio, setSelectRadio] = useState();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>
      {
        skills.map((item, index) =>
          <TouchableOpacity
            key={index}
            onPress={() => setSelectRadio(item.id)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.radio}>
                {
                  selectRadio === item.id ? <View style={styles.radioBg}></View> : null
                }
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )
      }
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
export default DynamicRadioButtom;