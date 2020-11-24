import React from "react";
import routes from "../navigation/routes";
import ScreenList from "../components/ScreenList";

const menuOptions = [
  {
    title: "Marea & Corrientes",
    routeName: routes.MAREAYCORRIENTES,
    icon: { name: "ios-help-buoy", type: "ionicon" },
  },
  {
    title: "Pronóstico Clima",
    routeName: routes.PRONOSTICOCLIMA,
    icon: { name: "ios-partly-sunny", type: "ionicon" },
  },
];

const Navegacion = ({ navigation }) => {
  return <ScreenList menuOptions={menuOptions} navigation={navigation} />;
};


export default Navegacion;
