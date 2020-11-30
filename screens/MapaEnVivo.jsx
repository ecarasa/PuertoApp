import React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { Button } from "react-native-elements";
import Strong from "../components/Strong";
import { VER_MAPA_URL } from "../utils/constants";

const MapaEnVivo = () => {
  const handleVerMapa = () => {
    Linking.openURL(VER_MAPA_URL);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Consultá el mapa en vivo del Puerto Buenos Aires en marinetraffic.com
      </Text>
      <Text style={styles.textItem}>
        {"Longitude: "}
        <Strong> {"-58.360"}</Strong>
      </Text>
      <Text style={styles.textItem}>
        {"Latitude: "}
        <Strong> {"-34.600"}</Strong>
      </Text>
      <Button
        onPress={handleVerMapa}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonSecondary}
        titleStyle={styles.buttonTitle}
        title="VER MAPA EN VIVO"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    lineHeight: 22,
    margin: 10,
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  buttonSecondary: {
    backgroundColor: "#717171",
  },
  textItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    fontSize: 18,
    textAlign: "center",
    width: "100%",
  },
});

export default MapaEnVivo;
