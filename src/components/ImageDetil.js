import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {

  return (
    <View>
      <Image source={imageSource} />
      <Text style={{textAlign:'center'}}>{title}</Text>
      <Text style={{textAlign:'center'}}>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;