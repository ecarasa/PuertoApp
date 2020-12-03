import React from "react";
import { StyleSheet, FlatList } from "react-native";
import BuqueCard from "./BuqueCard";

const BuquesSection = React.forwardRef(({ buques }, ref) => {
  const renderItem = ({ item }) => <BuqueCard buque={item} />;

  const keyExtractor = React.useCallback((item) => item.id, []);

  return (
    <FlatList
      ref={ref}
      data={buques}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BuquesSection;
