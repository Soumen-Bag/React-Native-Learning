import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useState } from 'react'

const Place = createContext();
const PlaceContex = ({children}) => {
  const [selectedCity, setSelectedCity] = useState("")
  return (
    <Place.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </Place.Provider>
  )
}

export { PlaceContex, Place }

const styles = StyleSheet.create({})