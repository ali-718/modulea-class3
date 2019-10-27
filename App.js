import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Button
} from "react-native";
import ButtonComponent from "./src/components/ButtonComponent";
import Counter from "./src/components/Counter";

export default class App extends Component {
  //arrow function
  //  MyName = (name) => name

  //  MyName(name){
  //    return name
  //  }

  state = {
    counter: 300,
    name: "ali"
  };

  myAlert = () => alert("my name is ali haider");

  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });

    // this.state.counter = 400
  };

  render() {
    return (
      <SafeAreaView
        style={{ width: "100%", marginTop: Platform.OS == "android" ? 25 : 0 }}
      >
        <Text> textInComponent </Text>
        <Text>hello this is MAD clas</Text>
        <View style={{ marginTop: 30, width: 100 }}>
          {/* <Button title="click me" color="red" onPress={() => this.counter()} /> */}
        </View>
        <Text style={{ fontSize: 25 }}>{this.state.counter}</Text>

        <View style={{ width: "100%", alignItems: "center" }}>
          <ButtonComponent name="Moiz" color="aqua" />
        </View>

        <Counter name="Ali" />
      </SafeAreaView>
    );
  }
}
