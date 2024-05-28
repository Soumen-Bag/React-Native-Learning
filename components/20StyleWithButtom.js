import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const StyleWithButtom=()=>{
  return(
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.buttom}>Buttom</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex: 1
  },
  buttom:{
    fontSize: 24,
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 10,
    textAlign: 'center',
    borderRadius: 12,
    shadowColor: 'red',
    elevation: 25,
    shadowOpacity: 5
  }
})
export default StyleWithButtom;