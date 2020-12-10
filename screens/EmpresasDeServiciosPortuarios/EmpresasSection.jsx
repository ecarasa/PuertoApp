import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Empresa from "./EmpresaCard";

const EmpresasSection = React.forwardRef(({ empresas }, ref) => {
  const renderItem = ({ item }) => <Empresa item={item} />;

  const keyExtractor = React.useCallback((item) => item.id, []);

  return (
    <FlatList
      ref={ref}
      data={empresas}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
});

const styles = StyleSheet.create({});

export default EmpresasSection;
