import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DetailComponent extends Component {
  render() {
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: "mediumseagreen",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "white" }}>
          This is Detail Screen
        </Text>
      </View>
    )
  }
}
