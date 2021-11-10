import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppHeader from "../header.js";

import Random from "../components/random.js";
import PropTypes from "prop-types";
export default class Output extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      buttonColor: "#D3D3D3",
    };
  }

  changeColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor: color });
  };

  render() {
    return (
      <View>
        <AppHeader />

        <View>
          <Text
            style={{
              fontSize: 30,
              alignSelf: "center",
              marginTop: 10,
              marginBottom: 10,
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          >
            Generate your dream color by clicking on the Random color button !
            🤗
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor}>
              Random Color
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttontxt}
              onPress={() => {
                this.props.navigation.navigate("Generate");
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text
            style={[
              styles.OutputColor,
              { backgroundColor: this.state.buttonColor },
            ]}
          ></Text>
        </View>
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "",
            fontFamily: "Roboto ",
            fontSize: 25,
            marginTop: 19,
          }}
        >
          {this.state.buttonColor}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  OutputColor: {
    elevation: 10,
    //  backgroundColor: 'lightgrey',
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 300,
    height: 300,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
  button: {
    elevation: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 200,
    height: 50,
    borderRadius: 5,
    /*borderWidth: 1,
    borderColor: "gray",
     alignSelf: "center",
    marginLeft: 100,*/
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
  buttontxt: {
    fontSize: 27,
  },
});
