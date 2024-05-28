import { StyleSheet, Text, View } from "react-native";

const StyleInReactNative = () => {
  return (
    <View>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
      <Text style={styles.textBox}>Style in React Native</Text>
    </View>
  );
}
export default StyleInReactNative;

const styles=StyleSheet.create({
  textBox:{
    fontSize: 30,
    color: 'blue',
    backgroundColor: 'lightblue',
    margin: 12,
    padding: 6,
    borderRadius: 12,
    textAlign: 'center',
  }
})