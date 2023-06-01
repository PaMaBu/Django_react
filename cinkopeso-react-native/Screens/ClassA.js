import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';



export class ClassA extends Component {

    state = {
        name: 'conserje'
    }


  render() {
    return (
        <View>
            <Text style={{fontSize:25}}>
                {this.state.name}
                hola clase A
                {this.props.email}
            </Text>
            <Button title='click' onPress={() => this.setState({name:"Texto cambiado"})} />
        </View>
      
    )
  }
}

export default ClassA
