import { Pressable, StyleSheet, Text, View } from "react-native"

const PressableButtom=()=>{
  return(
    <View style={{flex: 1,justifyContent: 'center'}}>
      <Pressable
      onPress={()=> console.warn("normal on press")}
      onLongPress={()=> console.warn("long pressed")}
      >
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  )
}
const styles= StyleSheet.create({
  pressableBtn:{
    backgroundColor: 'lightpink',
    margin: 10,
    padding:12,
    borderRadius:13,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    shadowColor: 'blue',
    elevation: 12
  }
})
export default PressableButtom;