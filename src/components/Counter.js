import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Counter extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}> {this.props.name} </Text>
      </View>
    );
  }
}
