import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions
} from "react-native";

export default class VerticalScrollView extends Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView
        // ios only ///////////////
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        // ////////////////////////
        keyboardDismissMode="on-drag"
      >
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
        <Text
          style={{
            fontSize: 20,
            padding: 15,
            color: "white",
            textAlign: "center",
            backgroundColor: "green"
          }}
        >
          This is a text
        </Text>
        <TextInput
          style={{ padding: 10, margin: 10, borderWidth: 1 }}
          placeHolder="Enter text"
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              padding: 15,
              color: "white",
              textAlign: "center",
              backgroundColor: "purple"
            }}
          >
            Text inside a View
          </Text>
        </View>
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
        <Image
          source={require("../images/keyboard.jpg")}
          style={{
            width: screenWidth,
            height: (screenWidth * 1285) / 1750,
            marginTop: 20
          }}
        />
      </ScrollView>
    );
  }
}
