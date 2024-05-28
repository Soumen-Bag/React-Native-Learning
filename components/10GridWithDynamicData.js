import { StyleSheet, Text, View } from "react-native"

const GridWithDynamicData = () => {
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
      <Text style={{ fontSize: 34 }}>Grid With Dynamic Data</Text>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          users.map((item) => <Text style={styles.iteam}>{item.name}</Text>)
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iteam: {
    fontSize: 24,
    backgroundColor: '#6092e0',
    height: 100,
    width: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    padding: 5,
    margin: 5

  }
})
export default GridWithDynamicData;