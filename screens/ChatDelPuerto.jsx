import React from "react";
import { View, Text, Button } from "react-native";

const ChatDelPuerto = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ChatDelPuerto Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ChatDelPuerto;
