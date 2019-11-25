import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Alihaider from "./src/assets/images/pakistan.jpg";

export default class sample extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Home name="waseem" age={23} />
        <Image
          style={{ width: 200, height: 200 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2019/11/20/17/42/vancouver-4640671_1280.jpg"
          }}
        />
        <Image style={{ width: 200, height: 200 }} source={Alihaider} />
      </View>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.age}</Text>
      </View>
    );
  }
}
