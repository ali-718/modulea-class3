import { TouchableOpacity, View, Text } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <TouchableOpacity onPress={() => alert("i am from button Component")}>
      <View
        style={{
          width: 100,
          height: 50,
          backgroundColor: "blue",
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10
        }}
      >
        <Text style={{ color: "white" }}>Button Component</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
