import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, TextInput, Text, View } from 'react-native';

const App = () => {
  const [value, onChangeText] = React.useState('0');
  return (
    <View style={styles.container}>
      <Text style={styles.textHeadings}>
        Enter Original Price
      </Text>
      <TextInput
        style={styles.fields}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Text style={styles.textHeadings}>
        Enter Disount Percentage
      </Text>
      <TextInput
        style={styles.fields}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <StatusBar style='auto'/>
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
  textHeadings: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fields: {
    alignItems: 'flex-end',
    borderColor: 'green', 
    borderWidth: 1,
    color: 'yellow',
    backgroundColor: 'blue',
    textAlign: 'right',
    height: 40,
    justifyContent: 'flex-end',
    // width: Dimensions.get('screen').width - 30,
    width: 250,
  },
})

export default App;