import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Screens
import Buques from "../screens/Buques";
import ChatDelPuerto from "../screens/ChatDelPuerto";
import EmpresasDeServiciosPortuarios from "../screens/EmpresasDeServiciosPortuarios";
import FIRCNRT from "../screens/FIRCNRT";
import Home from "../screens/Home";
import Navegacion from "../screens/Navegacion";
import Reclamos from "../screens/Reclamos";
import Twitter from "../screens/Twitter";

import routes from "./routes";
import WithBuenosAiresFooter from "../components/WithBuenosAiresFooter";
import MareaYCorrientes from "../screens/MareaYCorrientes";
import PronosticoClima from "../screens/PronosticoClima";
import VehiculosHabilitados from "../screens/VehiculosHabilitados";
import LINTI from "../screens/LINTI";

const Stack = createStackNavigator();

export const commonScreens = [
  { component: Buques, title: "Buques", routeName: routes.BUQUES },
  {
    component: ChatDelPuerto,
    title: "Chat del puerto",
    routeName: routes.CHAT,
  },
  {
    component: EmpresasDeServiciosPortuarios,
    title: "Empresas de Servicios Portuarios",
    routeName: routes.EMPRESAS,
  },
  { component: FIRCNRT, title: "FIR-CNRT", routeName: routes.FIRCNRT },
  { component: Home, title: "¡Hola!", routeName: routes.HOME },
  { component: Navegacion, title: "Navegación", routeName: routes.NAVEGACION },
  { component: Reclamos, title: "Reclamos", routeName: routes.RECLAMOS },
  { component: Twitter, title: "@PuertoBsAs", routeName: routes.TWITTER },
];

export const navegacionScreens = [
  {
    component: MareaYCorrientes,
    title: "Marea & Corrientes",
    routeName: routes.MAREAYCORRIENTES,
  },
  {
    component: PronosticoClima,
    title: "Pronóstico Clima",
    routeName: routes.PRONOSTICOCLIMA,
  },
];

export const fircnrtScreens = [
  {
    component: VehiculosHabilitados,
    title: "Vehículos Habilitados",
    routeName: routes.VEHICULOSHABILITADOS,
  },
  {
    component: LINTI,
    title: "LINTI",
    routeName: routes.LINTI,
  },
];

const MainStack = () => {
  return (
    <WithBuenosAiresFooter>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        screenOptions={{
          headerTitleStyle: {
            fontFamily: "GothamBold",
            fontSize: 15,
          },
          headerTitleAlign: "center",
          cardStyle: { backgroundColor: "white" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {[...commonScreens, ...navegacionScreens, ...fircnrtScreens].map(
          ({ component, title, routeName }) => (
            <Stack.Screen
              name={routeName}
              component={component}
              options={{ title }}
              key={title}
            />
          )
        )}
      </Stack.Navigator>
    </WithBuenosAiresFooter>
  );
};

export default MainStack;
