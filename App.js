import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Button,
  Image,
  ScrollView
} from "react-native";
import { ImageComponent, TextComponent } from "./src/screens/Image";
import MyHome from "./src/screens/Home";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

class Home extends Component {
  render() {
    return (
      <View>
        
        <Text style={{ fontSize: 30, marginTop: 50 }}>My home</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MyAbout")}
        >
          <Text>go to about</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Text>open drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class About extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, marginTop: 50 }}>I am in About</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Login extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 30, marginTop: 50 }}>I am in Login</Text>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text>go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const AuthScreen = createStackNavigator({
  Login: {
    screen: Login
  }
});

const Authnav = createAppContainer(AuthScreen);

const Stack = createStackNavigator(
  {
    MyHome: {
      screen: Home
    },
    MyAbout: {
      screen: About
    }
  },
  {
    headerMode: "none"
  }
);

const Stacknav = createAppContainer(Stack);

const Drawer = createDrawerNavigator({
  Dashboard: {
    screen: Stacknav
  },
  AuthScreen: {
    screen: Authnav
  }
});

const MainNav = createAppContainer(Drawer);

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
        <MainNav />
      </SafeAreaView>
    );
  }
}
