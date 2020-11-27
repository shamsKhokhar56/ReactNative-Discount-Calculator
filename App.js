import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function App(){
  const [origPrice, setOrigPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [savePrice, setSavePrice] = useState();
  const [finalPrice, setFinalPrice] = useState();
    
  handleCount = () => {
    if(discount > 100){
      alert("Discount percentage cannot be greater than 100");
    }
    else if(discount <= 100 && origPrice === ''){
      alert("Original price cannot be empty")
    }
    else{ 
      var x = (origPrice*discount)/100;
      setSavePrice(x);
      const y = origPrice - x;
      setFinalPrice(y);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
          Discount Calculator
      </Text>
      <View style={styles.upper}>
        <Text style={styles.textHeadings}>
          Enter Original Price
        </Text>
        <TextInput style={styles.fields}
          onChangeText={text => setOrigPrice(text)}
          value={origPrice}
          keyboardType="number-pad"
          placeholder="0"
          placeholderTextColor='white'
          />
        <Text style={styles.textHeadings}>
          Enter Disount Percentage
        </Text>
        <TextInput
          style={styles.fields}
          onChangeText={text => setDiscount(text)}
          value={discount}
          keyboardType="number-pad"
          placeholder="0"
          placeholderTextColor='white'
          onSubmitEditing={handleCount}
        />
      </View>
      <View style={styles.lower}>
        <View style={styles.lowerFields}>
            <Text style={[styles.lowerFieldsStyle, { color: 'white' } ]}>You Save:</Text>
            <Text style={[styles.lowerFieldsStyle, { color: 'green' } ]}>{savePrice} </Text>
        </View>
        <View style={styles.lowerFields}>
            <Text style={[styles.lowerFieldsStyle, { color: 'white' } ]}>Final Price:</Text>
            <Text style={[styles.lowerFieldsStyle, { color: 'green' } ]}>{finalPrice} </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black', 
    flex: 1,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 40,
    color: 'white'
  },
  upper: {
    flex: 0.3,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
  },
  textHeadings: {
    color: 'white',
    fontSize: 15,
    margin: 10
  },
  fields: {
    alignItems: 'flex-end',
    backgroundColor: 'black',
    borderColor: 'green', 
    borderWidth: 1,
    color: 'white',
    height: 40,
    justifyContent: 'flex-end',
    padding: 8,
    textAlign: 'right',
    width: 350,
  },
  middle: {
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  button: {
    borderColor: 'green',
    borderRadius: 15,
    borderWidth: 4,
    height: 50,
    textAlign: 'center',
    width: 230,
  },
  lower: {
    backgroundColor: 'black',
    flex: 0.3,
    paddingTop: 15,
    width: 250,
  },
  lowerFields: {
    color: 'white',
    backgroundColor: 'black',
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 3,
    paddingHorizontal: 10,
  },
  lowerFieldsStyle: {
    backgroundColor: 'black',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 10, 
    
},
})