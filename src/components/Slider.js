import { StyleSheet, Text, View } from 'react-native'
import Slideshow from "react-native-image-slider-show";
import React from 'react'

const Slider = () => {
  return (

    <View>   
     <Slideshow
    //containerStyle={{ width: 200 }}
    dataSource={[
      {
        url:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      { url: "http://placeimg.com/640/480/any" },
      { url: "http://placeimg.com/640/480/any" },
      {
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
    ]}
    onPress={(item) => console.log("item", item)}
    closeIconColor="#fff"
  />
  </View>
    )
}

export default Slider

const styles = StyleSheet.create({})