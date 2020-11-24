import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MareaYCorrientes = () => {
  return (
    <View style={styles.container}>
      <Text>MareaYCorrientes Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MareaYCorrientes;
