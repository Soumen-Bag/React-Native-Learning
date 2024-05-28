import { useState } from "react"
import { Button, Modal, StyleSheet, Text, View } from "react-native"

const ModelOrDialogBox = () => {
  const [showModal,setShowModal]=useState(false)
  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={showModal}
        animationType='slide'
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 27,marginBottom: 20}}>Hello React Native</Text>
            <Button title="Close Modal" onPress={()=> setShowModal(false)}/>
          </View>
        </View>
      </Modal>

      <View style={styles.buttomView}>
        <Button title="Open Model" onPress={()=>setShowModal(true)} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttomView: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 7
  },
  modalView: {
    backgroundColor: 'lightpink',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'red',
    elevation: 25
  }
})
export default ModelOrDialogBox;