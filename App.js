import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./navigation/MainStack";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  let [fontsLoaded] = useFonts({
    GothamBold: require("./assets/fonts/gotham/Gotham-Bold.otf"),
    GothamBook: require("./assets/fonts/gotham/Gotham-Book.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
