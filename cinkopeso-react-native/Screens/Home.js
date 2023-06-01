import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native';
import {Card, FAB} from 'react-native-paper'

// const myData = [
//     {id:1,title:'titulo',description:'description'},
//     {id:2,title:'titulo2',description:'description2'},
//     {id:3,title:'titulo3',description:'description3'},
//     {id:4,title:'titulo4',description:'description4'},
//     {id:5,title:'titulo4',description:'description4'},
//     {id:6,title:'titulo4',description:'description4'},
//     {id:7,title:'titulo4',description:'description4'},
//     {id:8,title:'titulo4',description:'description4'},
//     {id:9,title:'titulo4',description:'description4'},
//     {id:10,title:'titulo4',description:'description4'},
//     {id:11,title:'titulo4',description:'description4'},
//     {id:12,title:'titulo4',description:'description4'},
//     {id:13,title:'titulo4',description:'description4'},
//     {id:14,title:'titulo4',description:'description4'},
//     {id:15,title:'titulo4',description:'description4'},
//     {id:16,title:'titulo4',description:'description4'},
//     {id:17,title:'titulo4',description:'description4'},
//     {id:18,title:'titulo4',description:'description4'},
//     {id:19,title:'titulo4',description:'description4'},
//     {id:20,title:'titulo4',description:'description4'},
// ]


function Home(props) {

    const [name, setName] = useState( "elpablo")
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadData = () => {
        fetch("http://192.168.100.4:80/api/monedas/", {method: 'GET'}).then(
            response => response.json()
            ).then(
                data => {
                    setData(data)
                    setLoading(false)
                }
            ).catch(error => {Alert.alert("error",error)})
    }

    useEffect(() => {
        loadData();
    },[])

    const clickedItem = (item) => {
        props.navigation.navigate("Detail", {data: data})


    }

    const renderData = (item) => {
        return (<Card style={styles.cardStyle}  onPress={() => clickedItem(item)}> 
            <Text style={{fontSize:25}}>{item.nombre}</Text>
            {/* <Text>{item.description}</Text> */}
        </Card>
    )
    }
    return (
        // <Text style={{fontSize:25}}>
        //     Hola cinkopesos
        //     {name}
        // </Text>
        // <Button title="cambiar" onPress={()=> setName("Boton cambiar presionado")}/>
        <View>
            <FlatList 
            data={data} 
            renderItem={({item}) => {return renderData(item)}} 
            onRefresh={() => loadData()}
            refreshing={loading}
            keyExtractor={item => item.id}/>
            <FAB style={styles.fab} small={true} icon='plus' onPress={()=> props.navigation.navigate("Create")}
            />
        </View>
        
    )
}

const styles =StyleSheet.create({
    cardStyle: {
        // width: 500,
        padding:10,
        margin:10,
    },
    fab: {
        flexDirection:"column-reverse",
        position: "absolute",
        margin:20,
        right: 0,
        bottom: 0,
        // backgroundColor:#fff
    }
});

export default Home;