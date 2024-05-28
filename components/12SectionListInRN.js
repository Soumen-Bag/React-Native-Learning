import { SectionList, Text, View } from "react-native"

const SectionListInRN = () => {
  const users = [
    {
      id: 1,
      name: 'Soumen',
      data: ["PHP", 'Node js', 'React Js']
    },
    {
      id: 2,
      name: 'Ramen',
      data: ["Java", 'BootStrap', 'Js']
    },
    {
      id: 3,
      name: 'Anil',
      data: ["Python", 'CSS', 'HTML']
    },
    {
      id: 4,
      name: 'Rajib',
      data: ["C++", "Angular js", ".Net"]
    }
  ]
  return (
    <View>
      <Text style={{ fontSize: 34 }}>Section List in React Native</Text>
      <SectionList
        sections={users}
        renderItem={({item})=><Text style={{fontSize: 20,marginLeft: 8}}>{item}</Text>}
        renderSectionHeader={({section: {name}})=>(
          <Text style={{fontSize: 28,color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  )
}
export default SectionListInRN;