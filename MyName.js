import React from "react";
import { Text } from "react-native";

const MyName = props => {
  return (
    <Text style={{ fontSize: 30, color: props.color }}>
      my name is {props.name}
    </Text>
  );
};

export default MyName;
