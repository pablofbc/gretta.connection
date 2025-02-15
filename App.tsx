import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Pressable, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { comunidadApi, vrmApi, editorApi } from "./services/user";
import React, { useState } from 'react';

export default function App() {
  const [str, setStr] = useState("");
  const comunidad = async () => {
    try {
      const a = await comunidadApi();
      const newStr = a[0].codVersion + ' | '+ a[0].codAssignment + ' | ' + a[0].versionName;
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      Alert.alert(
        'Comunidad API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from comunidadApi:', error);
      Alert.alert('Comunidad API', 'Error fetching data from comunidadApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  };

  const editor = async () => {
    try {
      const a = await editorApi("AACA6001019D6","COD_MPI");
      //console.log('Data:', a[0]);
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      Alert.alert(
        'Editor API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from EditorApi:', error);
      Alert.alert('Editor API', 'Error fetching data from EditorApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  }

  const vrm = async() =>{
    try {
      const a: any = await vrmApi("pfadmin","password");     
      const dataString = JSON.stringify(a, null, 2);  // Convierte los datos a cadena de texto con formato
      setStr(dataString); 
      console.log('Data:', dataString);
      Alert.alert(
        'VRM API', 
        dataString, 
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Error fetching data from vrmApi:', error);
      Alert.alert('VRM API', 'Error fetching data from vrmApi', [            
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ])
    }
  }

  const clearText = () => {
    setStr(''); // Establece `str` a una cadena vacía
  };

  return (    
    <SafeAreaProvider style={styles.contenedor}>        
        <StatusBar style={Platform.OS=='android' ? "light": "dark"}/>
        <View style={styles.header}>
          <Text style={styles.title}>
            Gretta - Connection
          </Text>
        </View>        
        <SafeAreaView style={styles.container}>      
          <TouchableOpacity style={styles.button} onPress={comunidad}>
          <Text style={styles.buttonText}>Comunidad API</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={editor}>
          <Text style={styles.buttonText}>Editor API</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} onPress={vrm}>
          <Text style={styles.buttonText}>VRM API</Text>
          </TouchableOpacity>
        </SafeAreaView>    
        {/* <View style={styles.area}>
          <Text style={styles.textArea}>{str}</Text>
        </View>  */}
      <View style={styles.area}>
        <ScrollView style={styles.scrollArea}>
          <Text style={styles.textArea}>{str}</Text>
        </ScrollView>
      </View>
      <View style={styles.areaButton}>
        <TouchableOpacity style={styles.clearButton} onPress={clearText}>
          <Text style={styles.buttonText}>Borrar Texto</Text>
        </TouchableOpacity>
      </View>          
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.2,
    flexDirection: "row",
    // alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    padding: 8,
    // paddingTop: 10,
  },
  button:{
    backgroundColor: '#005ce6',
    padding: 13,
    borderRadius: 7,
    //marginBottom: 10,
    //marginRight: 10,
    height: 50,
  },
  buttonText:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  textArea: {
    fontSize: 18,
    lineHeight: 21,
    //fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
    padding: 10,
  },
  area: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  clearButton: {
    backgroundColor: '#d9534f', // Color rojo para distinguir el botón de borrar
    padding: 13,
    borderRadius: 7,
    marginTop: 10,
  },
  areaButton: {
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'black',
    padding: 10,
  },
  scrollArea: {
    maxHeight: 800, // Ajusta este valor según tu diseño
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  contenedor: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    backgroundColor: 'black',
    //padding: 10,
    paddingTop: 25,
    paddingBottom: 1,
  },
});
