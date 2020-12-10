import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { Divider } from "react-native-elements";

const Empresa = ({ item }) => {
  const { empresa, direccion_tel, rubro, expediente } = item;
  return (
    <View style={empresaStyles.container}>
      <View style={empresaStyles.main}>
        <Text style={empresaStyles.header}>{empresa}</Text>
        <Text style={empresaStyles.bodyText}>{direccion_tel || "-"}</Text>
        <Text style={empresaStyles.bodyText}>{rubro || "-"}</Text>
        <Text style={empresaStyles.bodyText}>{expediente || "-"}</Text>
      </View>
      <Divider />
    </View>
  );
};
const empresaStyles = StyleSheet.create({
  container: {
    height: 150,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  header: {
    fontFamily: "GothamBold",
    textAlign: "center",
    fontSize: 15,
  },
  bodyText: {
    textAlign: "center",
    fontFamily: "GothamBook",
  },
});

const EmpresaMemo = React.memo(Empresa);

export default EmpresaMemo;
