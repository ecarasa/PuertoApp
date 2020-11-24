import React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import LoadingView from "../components/LoadingView";
import useAxios from "../hooks/useAxios";
import { MAREA_Y_CORRIENTE_URL } from "../utils/constants";

const IMG_ALTURA_MAREA = require("../assets/img/WVYNo81vTimg2RVauaoq_nature.png");
const IMG_VELOCIDAD_VIENTO = require("../assets/img/wSuPKve6R5WmzNSDM9Zj_cloud1.png");
const IMG_DIRECCION = require("../assets/img/mlTfTebR8i3btgOf8GMj_arrows.png");
const IMG_TEMPERATURA = require("../assets/img/APtRwcWERoObppxTdyXg_temperature.png");
const IMG_HUMEDAD = require("../assets/img/zKUANEYSHOgOEbu4v1V5_humidity.png");

const Section = ({ imageSource, text }) => {
  return (
    <View style={styles.sectionContainer}>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const ErrorView = () => {
  const errorMsg = "Error al cargar datos";
  return (
    <View>
      <Text style={styles.error}>{errorMsg}</Text>
    </View>
  );
};


const MareaYCorrientes = () => {
  const [data, loading, error] = useAxios(MAREA_Y_CORRIENTE_URL);

  if (loading) return <LoadingView />;
  if (error) return <ErrorView />;

  const hour = data.id.split(" ")[1].slice(0, 5);
  const timeSectionText = `Información actualizada: Hoy, ${hour} hs. GMT-0300 (hora estándar de Argentina)`;
  const textAlturaMarea = `Altura de Marea: ${data.altura}m`;
  const textVelocidadViento = `Velocidad Viento: ${data.velocidad}km/h`;
  const textDireccion = `Dirección: ${data.direccionViento}º`;
  const textTemperatura = `Temperatura: ${data.temperatura}º`;
  const textHumedad = `Humedad: ${data.humedad}%`;

  return (
    <View style={styles.container}>
      <View style={styles.timeSection}>
        <Text style={styles.timeSectionText}>{timeSectionText}</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Section imageSource={IMG_ALTURA_MAREA} text={textAlturaMarea} />
        <Section
          imageSource={IMG_VELOCIDAD_VIENTO}
          text={textVelocidadViento}
        />
        <Section imageSource={IMG_DIRECCION} text={textDireccion} />
        <Section imageSource={IMG_TEMPERATURA} text={textTemperatura} />
        <Section imageSource={IMG_HUMEDAD} text={textHumedad} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  timeSection: {
    height: 50,
  },
  timeSectionText: {
    color: "#888888",
    textAlign: "center",
    fontFamily: "GothamBook",
    fontSize: 14,
  },
  sectionContainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "GothamBook",
    paddingLeft: 10,
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});

export default MareaYCorrientes;
