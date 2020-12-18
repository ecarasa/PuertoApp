import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import EstadoDeBuqueCard from "./EstadoDeBuqueCard";

const EstadoDeBuquesSection = React.forwardRef(({ buques }, ref) => {
  const renderItem = ({ item }) => <EstadoDeBuqueCard buque={item} />;

  const keyExtractor = React.useCallback((item, index) => index, []);

  return (
    <FlatList
      ref={ref}
      data={buques}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
});

const styles = StyleSheet.create({});

export default EstadoDeBuquesSection;
