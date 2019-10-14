import React, { Component } from "react";
import { Text, View, SafeAreaView, Button } from "react-native";
import styles from "./constants/styles";

export default class App extends Component {
  state = {
    name: "ali haider",
    age: 21
  };

  // arrow function
  clickme = () => {
    // alert("you pressesd click me");
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <SafeAreaView style={[styles.safeArea, { width: "100%", flex: 1 }]}>
        <View
          style={{
            width: "100%",
            height: 50,
            flexDirection: "row",
            backgroundColor: "green"
          }}
        >
          <View style={{ width: "20%", justifyContent: "center", height: 50 }}>
            <Text style={{ marginLeft: 10 }}>ali</Text>
          </View>
          <View
            style={{
              width: "60%",
              height: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>Search</Text>
          </View>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              height: 50,
              alignItems: "flex-end"
            }}
          >
            <Text style={{ marginRight: 10 }}>ali</Text>
          </View>
        </View>

        <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
          <Button
            color="green"
            title="click me"
            onPress={() => this.clickme()}
          />
        </View>
        <View style={{ marginTop: 20, width: "100%", alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 25, fontWeight: "bold" }}>
            {this.state.age}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
