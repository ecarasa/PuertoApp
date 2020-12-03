import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ placeholder, onChangeText, value }) => {
  const removeText = React.useCallback(() => {
    onChangeText("");
  }, []);
  
  const icon = (
    <Icon
      name={value ? "close" : "search"}
      type="material"
      onPress={value ? removeText : null}
    />
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <View style={styles.iconContainer}>{icon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DEE2E6",
  },
  textInput: {
    flex: 1,
    textAlign: "center",
  },
  iconContainer: {
    padding: 10,
  },
});

export default SearchBar;
