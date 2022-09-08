import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Counter = () => {
   const [counter, setCounter] = useState(0)
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:20, marginBottom:20}}>Current Counte</Text>
      <Button onPress={()=>setCounter(counter +1)} title='Increament'></Button>
      <Button onPress={()=>setCounter(counter -1)} title='Decreament'></Button>
      <Text style={{textAlign:'center',fontSize:20, marginTop:20}}>Current Count: {counter}</Text>

    </View>
  )
}

export default Counter

const styles = StyleSheet.create({})