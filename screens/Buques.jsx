import React from "react";
import routes from "../navigation/routes";
import ScreenList from "../components/ScreenList";

const menuOptions = [
  {
    title: "Mapa en vivo",
    routeName: routes.MAPAENVIVO,
    icon: { name: "map", type: "fontisto" },
  },
  {
    title: "Listado de Buques",
    routeName: routes.LISTADODEBUQUES,
    icon: { name: "md-clipboard", type: "ionicon" },
  },
  {
    title: "Estado de Buques",
    routeName: routes.ESTADODEBUQUES,
    icon: { name: "clock", type: "fontisto" },
  },
];

const Buques = ({ navigation }) => {
  return <ScreenList menuOptions={menuOptions} navigation={navigation} />;
};


export default Buques;
