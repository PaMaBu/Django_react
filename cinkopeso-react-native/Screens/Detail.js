import React from 'react'
import { StyleSheet, Text, View, FlatList, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


function Detail(props) {


    const data = props.route.params.data;
    const deleteData = (data) => {
        fetch('http://192.168.100.4:80/api/monedas/${data.id}/', 
        {method: 'DELETE', headers: {
            'content-type': 'application/json'

        },
        },
       
        ).then(data => {props.navigation.navigate("Home")})
        .catch(error => {Alert.alert(error)})

    }
    return (
        <ScrollView>
            <View style={styles.viewStyle}>
                <Text style={{fontSize:20}}>
                {data.nombre}
                {/* {descipcion} */}
                </Text>
                <Text style={{marginTop:20}}>
                {/* {nombre} */}
                {data.descipcion}
                </Text>
                <View style={{marginTop:20}}   >
                    <Button style={styles.buttonStyle}
                    icon="update"
                    mode='contained'
                    onPress={() => props.navigation.navigate("Edit", {data:data})}
                    >
                        editar

                    </Button>
                    <Button style={styles.buttonStyle}
                    icon="update"
                    mode='contained'
                    onPress={() => deleteData(data)}
                    >
                        borrar

                    </Button>
                </View>
            </View>
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    viewStyle:{
        padding:10,
        mmargin:10,
    },
    btnStyle:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin:10,
        padding:10,
    }

})
export default Detail
