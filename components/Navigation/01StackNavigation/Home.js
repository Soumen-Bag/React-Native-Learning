import { View, Text } from "react-native"
const Home = (props) => {
  const {name, age} = props.route.params;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue'
      }}
    >
      <Text style={{ fontSize: 36, fontWeight: 'bold' }}>Home Screen</Text>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Name: {name}</Text>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Age: {age}</Text>
    </View>
  )
}
export default Home;