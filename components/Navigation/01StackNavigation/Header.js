import { View,Text,TextInput } from "react-native";
const Header=()=>{
  return(
    <View>
      <TextInput placeholder='name'
        style={{
          backgroundColor:'#c7f2ea',
          padding: 4,
          margin: 3,
          fontSize: 19,
        }}
      />
    </View>
  )
}
export default Header;