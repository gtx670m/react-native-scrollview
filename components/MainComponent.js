import React, { Component } from "react";
import { Text, View } from "react-native";

export default class MainComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "dodgerblue",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "white" }}>
          This is Main Screen
        </Text>
      </View>
    );
  }
}
