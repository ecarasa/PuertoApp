import React from "react";
import routes from "../navigation/routes";
import ScreenList from "../components/ScreenList";

const menuOptions = [
  {
    title: "Vehículos Habilitados",
    routeName: routes.VEHICULOSHABILITADOS,
    icon: { name: "md-bus", type: "ionicon" },
  },
  {
    title: "LINTI",
    routeName: routes.LINTI,
    icon: { name: "md-person", type: "ionicon" },
  },
];

const FIRCNRT = ({ navigation }) => {
  return <ScreenList menuOptions={menuOptions} navigation={navigation} />;
};


export default FIRCNRT;
