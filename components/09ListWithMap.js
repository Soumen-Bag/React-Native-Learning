import { Text, View, StyleSheet, ScrollView } from "react-native";

const ListWithMap = () => {
  const users = [{
    id: 1,
    name: 'Soumen'
  }, {
    id: 2,
    name: 'Ram'
  }, {
    id: 3,
    name: 'Shyam'
  }, {
    id: 4,
    name: 'Shita'
  }, {
    id: 5,
    name: 'Xolo'
  }, {
    id: 6,
    name: 'Tapan'
  }, {
    id: 7,
    name: 'dgj'
  }, {
    id: 8,
    name: 'Shita'
  }, {
    id: 9,
    name: 'Xolo'
  }, {
    id: 10,
    name: 'Tapan'
  }, {
    id: 11,
    name: 'dgj'
  }]
  return (
    <View>
      <Text style={{ fontSize: 30 }}>List With Map Function</Text>
      <ScrollView style={{marginBottom: 50}}>
        {
          users.map((item) => <Text style={styles.item}>{item.name}</Text>)
        }
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    padding: 10,
    backgroundColor: '#6092e0',
    borderColor: '#01061a',
    margin: 12
  }
})


export default ListWithMap;
