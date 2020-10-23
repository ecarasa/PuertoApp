import React from "react";
import { StyleSheet, View, Image } from "react-native";

const WithBuenosAiresFooter = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.children}>{children}</View>
      <View style={styles.footer}>
        <Image
          source={require("../assets/img/logos.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  children: {
    flex: 9,
  },
  footer: {
    flex: 1,
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default WithBuenosAiresFooter;
