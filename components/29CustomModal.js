import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CustomModal = () => {
  const [show, setShow] = useState(false)
  return (
    <View style={styles.main}>
      {
        show ?
          <View style={styles.modal}>
            <View style={styles.body}>
              <Text>Some Text</Text>
              <Button title='Close Dialog' onPress={()=> setShow(false)}/>
            </View>
          </View>
          : null
      }
      <Button title='Open Dialog' onPress={()=> setShow(true)}/>
    </View>
  )
}

export default CustomModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    backgroundColor: 'white',
    height: 300,
    width: 300,
    margin: 12,
    justifyContent: 'flex-end',
    padding: 12,
    borderRadius: 20
  }
})