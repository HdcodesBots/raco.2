import Random from "../components/random.js";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppHeader from "../header.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import Output from "./output.js";
export default class Generate extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View style={styles.container}>
          <Text
            style={{
              textAlign: "center",
              margin: 5,
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            About
          </Text>
          <Text
            style={{
              textAlign: "center",
              margin: 10,
              fontFamily: "tahoma",
              fontSize: 20,
            }}
          >
            Welcome to Raco! A random color generator Made by - Harshil Das and
            Tashien Mulla Ma'am
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttontxt}
              onPress={() => {
                this.props.navigation.navigate("Output");
              }}
            >
              1 color
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttontxt}
              onPress={() => {
                this.props.navigation.navigate("Pallete");
              }}
            >
              4 colors
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    elevation: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    width: 200,
    height: 50,
    borderRadius: 10,
    //borderWidth: 10,
    //borderColor: "gray",
    alignSelf: "center",
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3
  },
  buttontxt: {
    fontSize: 27,
  },
});
