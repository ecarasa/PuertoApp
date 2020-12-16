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
import MapaEnVivo from "../screens/MapaEnVivo";
import ListadoDeBuques from "../screens/ListadoDeBuques";
import EstadoDeBuques from "../screens/EstadoDeBuques";
import CapturarCredencial from "../screens/CapturarCredencial";
import EscanearCredencial from "../screens/EscanearCredencial";
import TerminosYCondiciones from "../screens/TerminosYCondiciones";

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
  {
    component: CapturarCredencial,
    title: "Capturar Credencial",
    routeName: routes.CAPTURARCREDENCIAL,
  },
  {
    component: EscanearCredencial,
    title: "Escanear Credencial",
    routeName: routes.ESCANEARCREDENCIAL,
  },
  {
    component: TerminosYCondiciones,
    title: "Términos y condiciones",
    routeName: routes.TERMINOSYCONDICIONES,
  },
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

export const buquesScreens = [
  {
    component: MapaEnVivo,
    title: "Mapa en vivo",
    routeName: routes.MAPAENVIVO,
  },
  {
    component: ListadoDeBuques,
    title: "Listado de Buques",
    routeName: routes.LISTADODEBUQUES,
  },
  {
    component: EstadoDeBuques,
    title: "Estado de Buques",
    routeName: routes.ESTADODEBUQUES,
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
        {[
          ...commonScreens,
          ...navegacionScreens,
          ...fircnrtScreens,
          ...buquesScreens,
        ].map(({ component, title, routeName }) => (
          <Stack.Screen
            name={routeName}
            component={component}
            options={{ title }}
            key={title}
          />
        ))}
      </Stack.Navigator>
    </WithBuenosAiresFooter>
  );
};

export default MainStack;
