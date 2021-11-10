import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Generate from "./screen/generate";
import Output from "./screen/output";
import Pallete from "./screen/pallete";

export default class App extends React.Component {
  render() {
    return (
      // <View>
      <AppContainer />
      //</View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Generate: Generate,
  Output: Output,
  Pallete: Pallete,
});
const AppContainer = createAppContainer(AppNavigator);
