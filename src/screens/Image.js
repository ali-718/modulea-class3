import React, { Component } from "react";
import { Text, View, StatusBar, Image, Button } from "react-native";

export class ImageComponent extends Component {
  render() {
    return (
      <View
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 200, marginTop: 20 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2019/10/23/16/23/horse-4572080_1280.jpg"
            }}
          />
          <Text style={{ marginTop: 20 }}>
            The horse (Equus ferus caballus) is one of two extant subspecies of
            Equus ferus. It is an odd-toed ungulate mammal belonging to the
            taxonomic family Equidae. The horse has evolved over the past 45 to
            55 million years from a small multi-toed creature, Eohippus, into
            the large, single-toed animal of today.
          </Text>
        </View>
        <Button
          title="change page"
          onPress={() => {
            this.props.navigation.navigate("About");
          }}
        />
      </View>
    );
  }
}

export class TextComponent extends Component {
  render() {
    return (
      <View
        style={{ width: "100%", flex: 1, marginTop: StatusBar.currentHeight }}
      >
        <View style={{ padding: 10 }}>
          <Image
            style={{ width: "100%", height: 200, marginTop: 20 }}
            source={{
              uri:
                "https://cdn.pixabay.com/photo/2019/10/23/16/23/horse-4572080_1280.jpg"
            }}
          />
          <Text style={{ marginTop: 20 }}>
            The horse (Equus ferus caballus) is one of two extant subspecies of
            Equus ferus. It is an odd-toed ungulate mammal belonging to the
            taxonomic family Equidae. The horse has evolved over the past 45 to
            55 million years from a small multi-toed creature, Eohippus, into
            the large, single-toed animal of today.
          </Text>
          <Button
            title="click me to go back"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Button
            title="click me to go about"
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    );
  }
}
