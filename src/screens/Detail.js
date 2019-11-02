import React, { Component } from "react";
import { Text, View, Image, StatusBar, Button } from "react-native";
import Islamabad from "../assets/images/islamab.jpg";
import Pakistan from "../assets/images/pakistan.jpg";

export class IslamabadDetails extends Component {
  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ marginTop: 20, width: "100%", padding: 10 }}>
          <Image style={{ width: "100%", height: 200 }} source={Pakistan} />

          <Text style={{ marginTop: 20 }}>
            Isla stymabad (/ɪsˈlɑːməˌbɑːd/; Urdu: اسلام آباد‎, Islāmābād) is the
            capital city of Pakistan, and is federally administered as part of
            the Islamabad Capital Territory. Built as a planned city in the
            1960s to replace Karachi as Pakistan's capital, Islamabad is noted
            for its high standards of living,[7] safety,[8] and abundant
            greenery.[9]
          </Text>
        </View>
        <Button
          title="next"
          onPress={() => {
            this.props.navigation.navigate("About");
          }}
        />
      </View>
    );
  }
}

export class KarachiDetails extends Component {
  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ marginTop: 20, width: "100%", padding: 10 }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/08/27/02/53/pakistan-3633931_1280.jpg"
            }}
          />

          <Text style={{ marginTop: 20 }}>
            Isla stymabad (/ɪsˈlɑːməˌbɑːd/; Urdu: اسلام آباد‎, Islāmābād) is the
            capital city of Pakistan, and is federally administered as part of
            the Islamabad Capital Territory. Built as a planned city in the
            1960s to replace Karachi as Pakistan's capital, Islamabad is noted
            for its high standards of living,[7] safety,[8] and abundant
            greenery.[9]
          </Text>
        </View>
        <Button
          title="go back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

export class LahoreDetails extends Component {
  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ marginTop: 20, width: "100%", padding: 10 }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/08/27/02/53/pakistan-3633931_1280.jpg"
            }}
          />

          <Text style={{ marginTop: 20 }}>
            Isla stymabad (/ɪsˈlɑːməˌbɑːd/; Urdu: اسلام آباد‎, Islāmābād) is the
            capital city of Pakistan, and is federally administered as part of
            the Islamabad Capital Territory. Built as a planned city in the
            1960s to replace Karachi as Pakistan's capital, Islamabad is noted
            for its high standards of living,[7] safety,[8] and abundant
            greenery.[9]
          </Text>
        </View>
      </View>
    );
  }
}

export class QuettaDetails extends Component {
  render() {
    return (
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <View style={{ marginTop: 20, width: "100%", padding: 10 }}>
          <Image
            style={{ width: "100%", height: 200 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2018/08/27/02/53/pakistan-3633931_1280.jpg"
            }}
          />

          <Text style={{ marginTop: 20 }}>
            Isla stymabad (/ɪsˈlɑːməˌbɑːd/; Urdu: اسلام آباد‎, Islāmābād) is the
            capital city of Pakistan, and is federally administered as part of
            the Islamabad Capital Territory. Built as a planned city in the
            1960s to replace Karachi as Pakistan's capital, Islamabad is noted
            for its high standards of living,[7] safety,[8] and abundant
            greenery.[9]
          </Text>
        </View>
      </View>
    );
  }
}
