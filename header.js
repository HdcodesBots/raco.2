import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class AppHeader extends React.Component
{
render(){
    return(
   <View style={{backgroundColor:'black', height : 100, justifyContent:'center'}}>
<Text style={{color: 'white' , fontFamily : 'Roboto Light' , fontSize : 50 , textAlign : "center" , alignSelf : "center"  }}>
    Raco.
</Text>


   </View>
    )

}
}



 