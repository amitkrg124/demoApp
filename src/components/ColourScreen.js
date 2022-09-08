import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

const ColourScreen = () => {
  const [colors,setColors] =useState([]);
  console.log("colors",colors);
  return (
    <View>
        <Button title='Add Color' onPress={()=> setColors([...colors,RandomColor])}/>
        
        <FlatList
        data={colors}
        renderItem={({item})=>{
          return <View style={{ 
            backgroundColor: item,
            height:100,
            width:100,
            marginTop: 10
        }} />
        }}
        />
    </View>
  )
}

const RandomColor=()=>{
    const red=Math.floor(Math.random()*256)
    const green=Math.floor(Math.random()*256)
    const blue=Math.floor(Math.random()*256)

    return `rgb(${red},${green},${blue})`;
}

export default ColourScreen

const styles = StyleSheet.create({})