import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Header } from 'react-native/Libraries/NewAppScreen';





function Edit(props) {

    const data = props.route.params.data;
 
    const [title, setTitle] = useState(data.nombre)
    const [description, setDescription] = useState(data.description)

    const updateData = () => {
        fetch('http://192.168.100.4:80/api/monedas/${data.id}/', 
        {method: 'PUT', headers: {
            'content-type': 'application/json'

        },
        body:JSON.stringify({title: title, description: description})
        },
       
        ).then(resp => resp.json)
        .then(data => {props.navigation.navigate("Home",{data:data})}).catch(error => {Alert.alert(error)})
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
        icon="update"
        mode="contained"
        onPress={() => updateData()}
        >actualizar
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



export default Edit



