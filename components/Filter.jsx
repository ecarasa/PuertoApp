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
-...
*/
/* 
const filterEntry = {
  id: "rubro",
  label: "Rubro",
  options: [
    { id: "rubro1", label: "Rubro1" },
    { id: "rubro2", label: "Rubro2" },
  ],
};

const _selectedFilterEntry = {
  id: "rubro",
  options: [{ id: "rubro1", label: "Rubro1" }],
};
 */
const Filter = ({ filterEntry, selectedFilterEntry, onFilterEntryChange }) => {
  const label = filterEntry.label;
  const options = filterEntry.options;
  const selectedOptions = selectedFilterEntry.options;
  const onSelectedOption = (...args) => {
    console.log(args);
  };
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
