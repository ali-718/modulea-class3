import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Button,
  ScrollView
} from "react-native";
import { ImageComponent, TextComponent } from "./src/screens/Image";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MyHome from "./src/screens/Home";

const Stack = createStackNavigator(
  {
    Home: {
      screen: MyHome
    },
    Detail: {
      screen: ImageComponent
    },
    About: {
      screen: TextComponent
    }
  },
  {
    headerMode: "none"
  }
);

const MainNav = createAppContainer(Stack);

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
        style={{
          width: "100%",
          flex: 1,
          marginTop: Platform.OS == "android" ? 25 : 0
        }}
      >
        {/* <Text> textInComponent </Text>
        <Text>hello this is MAD clas</Text>
        <View style={{ marginTop: 30, width: 100 }}>
          <Button title="click me" color="red" onPress={() => this.counter()} />
        </View>
        <Text style={{ fontSize: 25 }}>{this.state.counter}</Text>

        <View style={{ width: "100%", alignItems: "center" }}>
          <ButtonComponent name="Moiz" color="green" />
          <Myname />
        </View>

        <TouchableOpacity>
          <View
            style={{
              width: 100,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: 10
            }}
          >
            <Text>New Button</Text>
          </View>
        </TouchableOpacity>
        <Counter name="Ali" />

        <View style={{ marginTop: 50 }}>
          <Myname name="Waseem sabir" age={21} />
        </View>

        <Image
          style={{ width: "100%", height: 200 }}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2019/10/23/16/23/horse-4572080_1280.jpg"
          }}
        /> */}
        {/* <ScrollView>
          <ImageComponent />
          <TextComponent />
        </ScrollView> */}
        <MainNav />
      </SafeAreaView>
    );
  }
}
