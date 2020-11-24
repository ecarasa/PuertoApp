import React from "react";
import WebViewWithLoading from "../components/WebViewWithLoading";
import { PRONOSTICO_URL } from "../utils/constants";

const PronosticoClima = () => {
  return <WebViewWithLoading source={{ uri: PRONOSTICO_URL }} />;
};

export default PronosticoClima;
