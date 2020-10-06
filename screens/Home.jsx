import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { ListItem, Icon } from "react-native-elements";
import routes from "../navigation/routes";

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
                <ListItem.Title>{title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          );
        })}
      </View>
      <View style={styles.midContainer}>
        <View>
          <Icon name="qrcode" type="material-community" size={52} />
          <Text>Escanear credencial</Text>
        </View>
        <View>
          <Icon name="camera" type="material-community" size={52} />
          <Text>Capturar credencial</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Image
          source={require("../assets/img/logos.png")}
          style={styles.logoStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  listItemContainer: {
    padding: "3%",
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
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logoStyle: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
});

export default Home;
