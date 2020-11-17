import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import { EMPRESAS_URL } from "../../utils/constants";
import axios from "axios";
import res from "../../utils/empresasResponseExample.json";
import SearchBar from "../../components/SearchBar";
import Empresa from "./Empresa";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.empresa.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const EmpresasDeServiciosPortuarios = () => {
  const [data, setData] = React.useState();
  const [searchInput, setSearchInput] = React.useState("");

  React.useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        setData(res.empresas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmpresas();
  }, []);

  const renderItem = ({ item }) => <Empresa item={item} />;

  const keyExtractor = React.useCallback((item) => item.id, []);

  const onFilterPress = () => {};

  const listItems = filterByText(data, searchInput);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder={"Buscar por nombre"}
            onChangeText={setSearchInput}
            value={searchInput}
          />
        </View>
        <View style={styles.filterIconContainer}>
          <Icon name="filter-list" type="material" onPress={onFilterPress} />
        </View>
      </View>
      {listItems?.length ? (
        <FlatList
          data={listItems}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      ) : (
        <Text style={styles.noResults}>No se encontraron resultados</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchBarContainer: {
    width: "70%",
  },
  filterIconContainer: {
    padding: 10,
  },
  noResults: {
    textAlign: "center",
    fontFamily: "GothamBook",
    color: "red",
    fontSize: 15,
  },
});

export default EmpresasDeServiciosPortuarios;
