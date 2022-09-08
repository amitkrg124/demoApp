import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import ListScreen from './ListScreen';
const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Button 
    onPress={()=> navigation.navigate("ListScreen")}
    title="Go to Component"/>
    <TouchableOpacity 
    onPress={()=> console.log("Line is clicked")}
    >
    <Text>Go to Line Screen</Text>
    </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})