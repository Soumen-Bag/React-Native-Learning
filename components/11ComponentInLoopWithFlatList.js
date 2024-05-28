import { FlatList, StyleSheet, Text, View } from "react-native"

const ComponentInLoopWithFlatList = () => {
  const users = [{
    id: 1,
    name: 'Soumen',
    email: 'soumen   5@gmail.com'
  }, {
    id: 2,
    name: 'Ram',
    email: 'ram23@gmail.com'
  }, {
    id: 3,
    name: 'Shyam',
    email: 'shyam96@gmail.com'
  }]
  return (
    <View>
      <Text style={{ fontSize: 32 }}>Component In Loop With FlatList</Text>
      <FlatList
        data={users}
        renderItem={({ item }) =><UserDetails item={item}/>}
      />
    </View>
  )
}

const UserDetails = (props) => {
  const item=props.item
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 23,
    backgroundColor: 'blue',
    // height: 120,
    // width: 120,
    margin: 3,
    padding: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1
  },
  box: {
    flex: 1,
    flexDirection: 'row'
  }
})
export default ComponentInLoopWithFlatList