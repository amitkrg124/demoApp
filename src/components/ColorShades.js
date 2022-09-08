import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'
import { FlipInEasyX } from 'react-native-reanimated';

const ColorShades = () => {
  const [red,setRed] =useState(0);
  const [blue,setBlue] =useState(0);
  const [green,setGreen] =useState(0);

  // const RandomColor=()=>{
  //   const lal=red*256
  //   const neela=blue*256
  //   const hara=green*256
  //   return `rgb(${lal},${hara},${neela})`;
  // }
  const currentIncreament=15;
  return (
    <View>
      <View style={{
            height:100,
            width:400,
            marginTop: 10
        }}>
        <Text style={{fontSize:20}}>Red</Text>
        <Button title='More Red' onPress={()=>setRed(red+currentIncreament)}/>
        <Button title='Less Red' onPress={()=>setRed(red-currentIncreament)}/>
      </View>
      <View style={{
            height:100,
            width:400,
            marginTop: 10
        }}>
        <Text style={{fontSize:20}}>Green</Text>
        <Button title='More green' onPress={()=>setGreen(green+currentIncreament)}/>
        <Button title='Less green' onPress={()=>setGreen(green-currentIncreament)}/>
      </View>
      <View style={{
            height:100,
            width:400,
            marginTop: 10
        }}>
        <Text style={{fontSize:20}}>Blue</Text>
        <Button title='More Blue' onPress={()=>setBlue(blue+currentIncreament)}/>
        <Button title='Less Blue' onPress={()=>setBlue(blue-currentIncreament)}/>
      </View>
      <View style={{
            backgroundColor: `rgb(${red},${green},${blue})`,
            height:100,
            width:100,
            marginTop: 20,
            alignSelf:'center'
        }} />
    </View>
  )
}

export default ColorShades

const styles = StyleSheet.create({})