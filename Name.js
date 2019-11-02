import { Text } from "react-native";
import React from "react";

const MyName = props => {
  return (
    <Text style={{ fontSize: 20 }}>
      I am {props.name} and my age is {props.age}
    </Text>
  );
};

export default MyName;
