import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenOne = () => {
const greeting = "Hi Good Morning"
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{greeting}</Text>
    </View>
  )
}

export default ScreenOne

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        textAlign:'center',
        marginVertical: 30
        
    },
})