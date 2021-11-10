//imoprting file
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import AppHeader from "../header.js";
import Random from "../components/random.js";

//exporting the pallete class in pallete.js
export default class Pallete extends React.Component {
  //constructor for setting the state of the pallete
  constructor() {
    super();
    this.state = {
      counter: 0,
      buttonColor: "#D3D3D3",
      buttonColor2: "#D4D3D3",
      buttonColor3: "#D4D3D3",
    };
  }
  /*a function which take 6 letters from 0 to f (hexadecimal format) and conctatinates 
     with #(color variable) to form the main color */
  changeColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor: color });
    this.setState({ RGB: color });
  };
  changeColor2 = () => {
    var letters2 = "0123456789ABCDEF";
    var color2 = "#";
    for (var i2 = 0; i2 < 6; i2++) {
      color2 += letters2[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor2: color2 });
    this.setState({ RGB2: color2 });
  };
  changeColor3 = () => {
    var letters3 = "0123456789ABCDEF";
    var color3 = "#";
    for (var i2 = 0; i2 < 6; i2++) {
      color3 += letters3[Math.floor(Math.random() * 16)];
    }
    this.setState({ buttonColor3: color3 });
  };

  //the app gets rendered here
  render() {
    //retruning ...
    return (
      <View>
        {/*the Raco. banner of the app */}
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
            Here is your color! 🤗
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
          {/*this button changes color of the blank text object */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor}>
              color1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor2}>
              color2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontxt} onPress={this.changeColor3}>
              color3
            </Text>
          </TouchableOpacity>
          {/*this button takes us back to the home page */}
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
          {/*the button that changes color of the blank text object get implemented here*/}
          <Text
            style={[
              styles.OutputColor,
              { backgroundColor: this.state.buttonColor },
            ]}
          ></Text>
          {/*the color data is shown here in the form of a hex code*/}
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "Roboto ",
              fontSize: 25,
              marginTop: 19,
            }}
          >
            {this.state.buttonColor}
          </Text>
          <View>
            <Text
              style={[
                styles.OutputColor2,
                { backgroundColor: this.state.buttonColor2 },
              ]}
            ></Text>
            <Text
              style={{
                alignSelf: "center",
                fontFamily: "Roboto ",
                fontSize: 25,
                marginTop: 10,
              }}
            >
              {this.state.buttonColor2}
            </Text>
          </View>
          <Text
            style={[
              styles.OutputColor2,
              { backgroundColor: this.state.buttonColor3 },
            ]}
          ></Text>
        </View>

        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Roboto ",
            fontSize: 25,
            marginTop: 10,
          }}
        >
          {this.state.buttonColor3}
        </Text>
      </View>
    );
  }
}
/*styling*/
const styles = StyleSheet.create({
  OutputColor: {
    elevation: 10,
    //  backgroundColor: 'lightgrey',
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 50,
    width: 100,
    height: 100,
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
    // borderWidth: 1,
    // borderColor: "gray",
    /* alignSelf: "center",
    marginLeft: 100,*/

    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
  },
  buttontxt: {
    fontSize: 27,
  },
  OutputColor2: {
    elevation: 10,
    //  backgroundColor: 'lightgrey',
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 200,
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
  },
});
