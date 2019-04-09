import React, { Component } from "react";
import { Text, View } from "react-native";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log(`${Date.now()}. This is constructor`);
    this.state = {
      numberOfRefresh: 0
    };
  }

  componentWillMount() {
    console.log(`${Date.now()}. This is componentWillMount`);
  }

  componentDidMount() {
    console.log(`${Math.floor(Date.now())}. This is componentDidMount`);
  }

  render() {
    console.log(`${Date.now()}. This is render function`);
    return <View style={{ left: 1, marginTop: 100 }} />;
  }
}

export default class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lifeCycle = <LifeCycle propA="abc" />;
    return (
      <View style={{ left: 1, marginTop: 100 }}>
        {lifeCycle}
      </View>
    );
  }
}
