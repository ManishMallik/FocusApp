import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import packageJson from './package.json';

const {proxy} = packageJson;

export default function App() {

  const [message, setMessage] = useState("Initial message");

  const getData = async () => {
    try {
      //const response = await axios.get('http://localhost:5000/api/profile');
      const response = await axios.get('http://192.168.1.133:5000/profile');
      console.log("It works");
      setMessage(response.data.name);
    } catch (error) {
      console.log("Not working")
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello!</Text>
      <Text>{message}</Text>
      <Button title="Get data" onPress={getData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
