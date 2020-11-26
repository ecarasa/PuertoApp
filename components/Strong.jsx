import React from "react";
import { View, Text } from "react-native";

const Strong = ({ style, children }) => {
  return <Text style={[{ fontWeight: "bold" }, style]}>{children}</Text>;
};

export default Strong;
