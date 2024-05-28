import { Text, View,FlatList, FlatListComponent, StyleSheet } from "react-native";

const FlatLists = () => {
  const users = [{
    id: 1,
    name: 'Soumen'
  }, {
    id: 2,
    name: 'Ram'
  }, {
    id: 3,
    name: 'Shyam'
  }]
  return (
    <View>
      <Text style={{ fontSize: 34 }}>FlatList In React Native</Text>
      <FlatList
        data={users}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}
export default FlatLists;

const styles=StyleSheet.create({
  item:{
    fontSize: 25,
    padding: 10,
    backgroundColor:'#6092e0',
    borderColor: '#01061a',
    margin: 12
  }
})