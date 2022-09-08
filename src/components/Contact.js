import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Alert,
    ScrollView,
    TextInput,
  } from 'react-native';
  import React, {useState} from 'react';
  import DropDownPicker from 'react-native-dropdown-picker';
  
  const Contact = () => {
    const [productName, setProductName] = React.useState(null);
    const [comment, setComment] = React.useState(null);
  
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Product');
    const [items, setItems] = useState([
      {label: 'Products', value: 'Product'},
      {label: 'Doctors', value: 'Doctor'},
      {label: 'Others', value: 'Other'},
    ]);
  
    const submitForm = () => {
      //
      if (!productName && !comment) {
        Alert.alert('Alert', 'Please Enter a Name');
        return;
      } else if (!comment) {
        Alert.alert('Alert', 'Please Write a Comment');
      } else {
        Alert.alert('Alert', 'Form is Submitted');
      }
    };
  
    return (
      <ScrollView>
        <View style={{margin: 40}}>
          <View style={{backgroundColor: '#5A92ED', flexDirection: 'row'}}>
            <Image
              style={styles.image}
              source={{uri: 'https://img.icons8.com/ios-filled/344/lock.png'}}
            />
            <Text style={styles.heading}>ENQUIRY FORM</Text>
          </View>
  
          <Text style={styles.text}>Feedback Realated To</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            labelStyle={{
              fontWeight: 'bold',
            }}
            itemSeparator={true}
            dropDownContainerStyle={{backgroundColor: '#2FC1DB'}}
          />
  
          <Text style={styles.text}>{value}</Text>
          <View>
            <TextInput
              style={styles.TextInput}
              // placeholderTextColor="#003f5c"
              onChangeText={setProductName}
              value={productName}
              // keyboardType="default"
            />
          </View>
          <Text style={styles.text}>Comment</Text>
          <View>
            <TextInput
              multiline
              numberOfLines={50}
              style={styles.input}
              onChangeText={setComment}
              value={comment}
              keyboardType="default"
            />
          </View>
  
          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}>
            <Text style={styles.signUpText}>Attach</Text>
          </TouchableHighlight>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 60,
            }}>
            <TouchableHighlight
              style={[styles.buttonContainer1, styles.signupButton]}
              onPress={() => submitForm()}>
              <Text style={styles.signUpText}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default Contact;
  
  const styles = StyleSheet.create({
    image: {
      height: 22,
      width: 22,
      marginTop: 7,
      marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    heading: {
      // textAlign:'center',
      fontWeight: 'bold',
      fontSize: 25,
      color: 'white',
      justifyContent: 'flex-end',
    },
    inputView: {
      backgroundColor: 'white',
      borderWidth: 1,
      width: '100%',
      height: 45,
      marginBottom: 20,
      alignItems: 'center',
      borderColor: 'black',
    },
    text: {
      marginVertical: 10,
      color: 'black',
    },
    TextInput: {
      // height: 50,
      flex: 1,
      padding: 10,
      // marginLeft: 20,
      fontSize: 20,
      backgroundColor: '#fff',
      borderWidth: 1,
      width: '100%',
      height: 45,
      marginBottom: 20,
      // alignItems: 'center',
      borderColor: 'black',
      borderRadius: 8,
    },
    input: {
      marginBottom: 15,
      borderWidth: 1,
      fontSize: 20,
      // flex: 1,
      // padding: 45,
      height: 250,
      backgroundColor: '#fff',
      padding: 10,
    },
    buttonContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 150,
      borderRadius: 5,
    },
    signupButton: {
      backgroundColor: 'skyblue',
    },
    buttonContainer1: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 150,
      borderRadius: 5,
    },
    signupButton: {
      backgroundColor: '#5A92ED',
    },
    signUpText: {
      fontSize: 15,
      color: 'white',
    },
  });

  