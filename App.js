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
import { Icon } from "native-base";
import { createDrawerNavigator } from "react-navigation-drawer";
import Drawer from "./Drawer";

class Home extends Component {
  render() {
    return (
      <View>
        <View>
          <Icon
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}
            name="google-home"
            type="MaterialCommunityIcons"
          />

          <Text style={{ fontSize: 30, marginTop: 50 }}>My home</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MyAbout")}
          >
            <Text>go to about</Text>
          </TouchableOpacity>
        </View>
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
const Stack = createDrawerNavigator(
  {
    MyHome: {
      screen: Home,
      navigationOptions: {
        drawerLockMode: "locked-closed"
      }
    },
    MyAbout: {
      screen: About
    }
  },
  {
    contentComponent: Drawer
  }
);

const Stacknav = createAppContainer(Stack);

export default class App extends Component {
  //arrow function
  //  MyName = (name) => name

  //  MyName(name){
  //    return name
  //  }

  state = {
    counter: 300,
    name: "ali",
    isLoading: true
  };

  myAlert = () => alert("my name is ali haider");

  counter = () => {
    this.setState({
      counter: this.state.counter + 1
    });

    // this.state.counter = 400
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  componentDidUpdate() {
    console.log("i am update");
  }

  data = [
    {
      name: "ali",
      age: 21,
      image:
        "https://cdn.pixabay.com/photo/2019/11/20/17/42/vancouver-4640671_1280.jpg"
    },
    {
      name: "annas",
      age: 21,
      image:
        "https://cdn.pixabay.com/photo/2019/11/07/11/52/cathedral-4608674_1280.jpg"
    },
    {
      name: "kamran",
      age: 21,
      image:
        "https://cdn.pixabay.com/photo/2019/10/29/14/46/landscape-4587079_1280.jpg"
    }
  ];

  render() {
    return (
      <SafeAreaView
        style={{
          width: "100%",
          flex: 1,
          marginTop: Platform.OS == "android" ? 25 : 0,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <Stacknav />
        {this.state.isLoading == true ? (
          <Text>Loading</Text>
        ) : (
          <TouchableOpacity onPress={() => this.counter()}>
            <Text>Counter</Text>
            <Text>{this.state.counter}</Text>
          </TouchableOpacity>
        )} */}
        {this.data.map(item => {
          return (
            <View style={{ marginTop: 20 }}>
              <Text>Name : {item.name}</Text>
              <Text>Age : {item.age}</Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100 }}
              />
            </View>
          );
        })}
      </SafeAreaView>
    );
  }
}
