import React, {useState} from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';




function Create() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const insertData = (props) => {
        fetch('http://192.168.100.4:80/api/monedas/', 
        {method: 'POST', headers: {
            'content-type': 'application/json'

        },
        body:JSON.stringify({title: title, description: description})
        },
       
        ).then(resp => resp.json())
        .then(data => {props.navigation.navigate("Home")}).catch(error => {Alert.alert(error)})
    }
  return (
    <View>
        <TextInput style={styles.textInput}
        label="nombre"
        value={title}
        mode="outlined"
        onChangeText={text => setTitle(text)}
        />

        <TextInput style={styles.textInput}
        label="descripcion"
        value={description}
        mode="outlined"
        onChangeText={text => setTitle(text)}
        />

        <Button
        icon="pencil"
        mode="contained"
        onPress={() => insertData()}
        >Crear
        </Button>
    </View>
  )
}



const styles = StyleSheet.create({
    textInput: {
        padding: 10,
        margin: 20,

    }


})
export default Create
