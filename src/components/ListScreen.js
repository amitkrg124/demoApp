import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

const ListScreen = () => {
    const friends = [
        {name: 'Amit', age: 34},
        {name: 'Abhishek', age:15},
        {name: 'Abhay', age: 21},
        {name: 'Arun', age: 31},
        {name: 'Ajay', age: 21},
        {name: 'Ankit', age: 14}
    ]
  return (
    <FlatList
    keyExtractor={friend=>friend.name}
    data={friends}
    renderItem= { ({item}) =>{
      return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
    }}
    />
  );
}


export default ListScreen

const styles = StyleSheet.create({
  textStyle:{
    fontSize:20,
    textAlign: 'center',
    marginVertical: 30
  }
})