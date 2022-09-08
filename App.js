import * as React from 'react';
import {ScrollView,View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import ScreenOne from './src/components/ScreenOne';
import ListScreen from './src/components/ListScreen';
import ImageScreen from './src/components/ImageScreen';
import Counter from './src/components/Counter';
import ColourScreen from './src/components/ColourScreen';
import ColorShades from './src/components/ColorShades';
import Form from './src/components/Form';
import Contact from './src/components/Contact';
import Home from './src/components/Home';
import Slider from './src/components/Slider';

const Tab = createBottomTabNavigator();

export default function app() {
  return (
    
    <NavigationContainer>
    
    
        <Tab.Navigator
          tabBarOptions={{
            style:{
              position:'absolute',
              bottom:25,
              left:20,
              right:20,
              elevation:0,
              backgroundColor:'#ddffdf',
              borderRadius:10,
              height:700,
            }
          }}
        >
        
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ScreenOne" component={ScreenOne} />
            <Tab.Screen name="Listscreen" component={ListScreen} />
            <Tab.Screen name="ImageScreen" component={ImageScreen}/>
            <Tab.Screen name="Counter" component={Counter}/>
            <Tab.Screen name="ColourScreen" component={ColourScreen}/>
            <Tab.Screen name="ColorShades" component={ColorShades}/>
            <Tab.Screen name="Contact" component={Contact}/>
            <Tab.Screen name="Home2" component={Home}/>
            <Tab.Screen name="Slider" component={Slider}/>
            
        </Tab.Navigator>
       
        
    </NavigationContainer>
   
  );
};