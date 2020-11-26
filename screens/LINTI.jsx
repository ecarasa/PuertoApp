import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Result = () => {
  return (
    <View>
      <Text>Result</Text>
    </View>
  );
};

const LINTI = () => {
  return (
    <View style={styles.container}>
      <Text>Linti</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {},
  buttonPrimary: {},
  buttonSecondary: {},
});

export default LINTI;
