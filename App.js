import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

import MainStack from "./navigation/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
