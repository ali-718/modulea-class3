import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

export const ButtonComponent = props => {
  return (
    <TouchableOpacity onPress={() => alert("i am button")}>
      <View
        style={{
          marginTop: 30,
          width: 100,
          height: 50,
          backgroundColor: props.color,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10
        }}
      >
        <Text style={{ color: "white" }}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Myname = () => {
  return <Text>I am ali</Text>;
};
