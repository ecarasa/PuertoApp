import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

const ErrorMsg = ({ msg, containerSyle }) => {
  return (
    <View style={containerSyle}>
      <Icon
        name="ios-information-circle"
        color="red"
        type="ionicon"
        size={32}
      />
      <Text style={styles.errorMsg}>{msg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsg: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ErrorMsg;
