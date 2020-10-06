import React from "react";
import { View, Text, Button } from "react-native";

const EmpresasDeServiciosPortuarios = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>EmpresasDeServiciosPortuarios Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default EmpresasDeServiciosPortuarios;
