import React from "react";
import { View, Text } from "react-native";
import useAxios from "../hooks/useAxios";
import { SvgUri, SvgXml } from "react-native-svg";

import XZFlag from "../assets/img/XZ.svg";
import ANFlag from "../assets/img/AN.svg";
import CSFlag from "../assets/img/CS.svg";
import XZ from "../assets/svg/XZ";

const LOCAL_FLAGS = {
  XZ: XZFlag,
  AN: ANFlag,
  CS: CSFlag,
};

const LipsisFlag = ({ code, containerStyle }) => {
  const sourceUrl = `https://lipis.github.io/flag-icon-css/flags/4x3/${code.toLowerCase()}.svg`;
  const [data, loading, error] = useAxios(sourceUrl);
  if (loading || error) return null;
  return (
    <View style={containerStyle}>
      <SvgXml xml={data} width="100%" height="100%" />
    </View>
  );
};

const Bandera = ({ code, containerStyle }) => {
  // TODO Check XZ, AN, CS Flags
  if (!code) return <View />;

  return <LipsisFlag code={code} containerStyle={containerStyle} />;

  return (
    <View style={containerStyle}>
      <XZFlag width="100%" height="100%" viewBox="0 0 800 400" />
    </View>
  );

  if (LOCAL_FLAGS.hasOwnProperty(code)) {
    const Flag = LOCAL_FLAGS[code];
    return <Flag width={26.66} height={20} />;
  }
};

export default Bandera;
