import { StyleSheet, Text, View, Image, TouchableHighlight, Alert } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
// import RNPickerSelect from 'react-native-picker-select'
import SelectList from 'react-native-dropdown-select-list'


const Form = () => {
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [selected, setSelected] = React.useState("");


  const data = [
    { key: 'Products', value: 'Products Name' },
    { key: `Doctors`, value: `Doctor's Name` },
    { key: 'Others', value: 'Name' },
  ]

  return (
    <ScrollView>
      <View style={{ margin: 40 }}>
        <View style={{ backgroundColor: '#5A92ED', flexDirection: 'row', }}>
          <Image style={styles.image} source={{ uri: 'https://img.icons8.com/ios-filled/344/lock.png' }} />
          <Text style={styles.heading}>ENQUIRY FORM</Text>
        </View>

        <Text style={styles.text}>Feedback Realated To</Text>
        
        <SelectList data={data}
          selectDefault={{ key: 'Products', value: 'Products Name' }}
          value={selected}
          setSelected={setSelected}
          dropdownStyles={{ backgroundColor: '#5A92ED' }}
          dropdownTextStyles={{ color: 'white' }}
          dropdownItemStyles={{ borderColor: 'black', borderBottomWidth: 1, }}
          boxStyles={{ backgroundColor: 'white', borderColor: 'black', borderRadius: 0 }}
        />

        {/* <RNPickerSelect
                onValueChange={(selected) => setSelected(selected)}
                items={[
                    { label: "Product Name", value: "Product" },
                    { label: "Doctor name", value: "Doctor" },
                    { label: "Other", value: "Other" },
                
                ]}
                
            /> */}
        <Text style={styles.text}>{selected}</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholderTextColor="#003f5c"
            onChangeText={setName}
            value={name}

          />
        </View>
        <Text style={styles.text}>Comment</Text>
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.input}
          onChangeText={setComment}
          value={comment}
          keyboardType="default"
        />
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}>
          <Text style={styles.signUpText}>Attach file</Text>
        </TouchableHighlight>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'flex-end', marginTop: 60
        }}>
          <TouchableHighlight style={[styles.buttonContainer1, styles.signupButton]} onPress={()=>Alert.alert("Alert", "Form is Submitted")}>
            <Text style={styles.signUpText}>Submit</Text>
          </TouchableHighlight>
        </View>

      </View>
    </ScrollView>

  )
}

export default Form

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
    justifyContent: 'flex-end'
  },
  inputView: {
    backgroundColor: "white",
    borderWidth: 1,
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: 'black'
  },
  text: {
    marginVertical: 10,
    color: 'black',
  },
  TextInput: {
    // height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontSize:20
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    fontSize:20
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
    backgroundColor: "skyblue",
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
    backgroundColor: "#5A92ED",
  },
  signUpText: {
    fontSize: 15,
    color: 'white',
  }
})
// const pickerSelectStyles = StyleSheet.create({
//   inputAndroid: {
//       fontSize: 10,
//       paddingTop: 13,
//       paddingHorizontal: 10,
//       paddingBottom: 12,
//       borderWidth: 1,
//       borderColor: 'red',
//       borderRadius: 4,
//       backgroundColor: 'white',
//       color: 'black',
//   }
// })