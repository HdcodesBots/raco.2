import React, { Component } from 'react';
import { StyleSheet, Text, View  } from 'react-native';

export default class Random extends Component {
constructor (){
    super()
    this.state = {dcolor : '#D3D3D3'}


}
changecolor=()=>{
var letters = '1234567890ABCDEF'
var color = '#' 
for (var i = 0 ; i<6 ; i++){
    color += letters[Math.floor(Math.random()*16)]
}
this.setState({dcolor : color})
}

}