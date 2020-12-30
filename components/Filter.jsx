import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SearchablePicker from "./SearchablePicker";

/*

filterOptions: [
  {id: "rubro", label: "Rubro", options: ["Rubro1", "Rubro2"]}
  {id: "bandera", label: "Bandera", options: [ {id: "bandera1", label: "Bandera1"}, {id: "bandera1", label: "Bandera1"}], renderOption: () => {}}
]

renderOption: (filterId,filterLabel, option) => {
  <Text>{option.label}</Text>
}

selectedOptions: [
  {label: "Rubro", id:"rubro", options: [{id: "bandera1", label: "Bandera1"}]}
]

*/
const Filter = ({ label, options, selectedOptions, onSelectedOption }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <SearchablePicker
        options={options}
        selectedOptions={selectedOptions}
        placeholder="Buscar filtro"
        onSelectedOption={onSelectedOption}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  label: {
    fontSize: 20,
    fontFamily: "GothamBook",
  },
});

export default Filter;
