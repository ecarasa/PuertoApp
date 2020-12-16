import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { ListItem, Icon } from "react-native-elements";
import routes from "../navigation/routes";
import QRCodeSVG from "../assets/img/qrcode.svg";
import CameraSVG from "../assets/img/camera.svg";
import { TouchableOpacity } from "react-native";

const menuOptions = [
  {
    title: "Buques",
    routeName: routes.BUQUES,
    icon: { name: "directions-boat", type: "material" },
  },
  {
    title: "Navegación",
    routeName: routes.NAVEGACION,
    icon: { name: "explore", type: "material" },
  },
  {
    title: "FIR-CNRT",
    routeName: routes.FIRCNRT,
    icon: { name: "traffic", type: "material" },
  },
  {
    title: "Empresas de servicios portuarios",
    routeName: routes.EMPRESAS,
    icon: { name: "local-offer", type: "material" },
  },
  {
    title: "Chat del puerto",
    routeName: routes.CHAT,
    icon: { name: "chat", type: "material" },
  },
  {
    title: "Twitter",
    routeName: routes.TWITTER,
    icon: { name: "logo-twitter", type: "ionicon" },
  },
  {
    title: "Reclamos",
    routeName: routes.RECLAMOS,
    icon: { name: "content-paste", type: "material" },
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.screensContainer}>
        {menuOptions.map(({ title, routeName, icon }, index) => {
          return (
            <ListItem
              key={index}
              onPress={() => navigation.navigate(routeName)}
              containerStyle={styles.listItemContainer}
              bottomDivider
            >
              <Icon name={icon.name} type={icon.type} />
              <ListItem.Content>
                <ListItem.Title style={styles.listItemTitle}>
                  {title}
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </View>
      <View style={styles.midContainer}>
        <TouchableOpacity
          style={{ width: "25%" }}
          onPress={() => navigation.navigate(routes.ESCANEARCREDENCIAL)}
        >
          <View style={styles.qrcodeSection}>
            <QRCodeSVG width={50} height={50} />
            <Text style={styles.qrText}>Escanear credencial</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(routes.TERMINOSYCONDICIONES)}
        >
          <View style={styles.terminosSection}>
            <Text style={styles.terminosText}>
              {"Ver términos y condiciones"}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ width: "25%" }}
          onPress={() => navigation.navigate(routes.CAPTURARCREDENCIAL)}
        >
          <View style={styles.cameraSection}>
            <CameraSVG width={50} height={50} />
            <Text style={styles.cameraText}>Capturar credencial</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  listItemContainer: {
    padding: "3%",
  },
  listItemTitle: {
    fontFamily: "GothamBook",
  },
  screensContainer: {
    flex: 0,
  },
  midContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  gothamBookFont: {
    fontFamily: "GothamBook",
  },
  qrcodeSection: {
    alignItems: "center",
  },
  qrText: {
    color: "#454440",
    fontSize: 12,
    textAlign: "center",
  },
  cameraSection: {
    alignItems: "center",
  },
  cameraText: {
    color: "#454440",
    fontSize: 12,
    textAlign: "center",
  },
  terminosSection: {},
  terminosText: {
    textAlign: "center",
    fontSize: 10,
    color: "#0094D5",
    fontFamily: "GothamBold",
  },
});

export default Home;
