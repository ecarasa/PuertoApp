import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { EMPRESAS_URL, PER_PAGE_RESULTS_EMPRESAS } from "../../utils/constants";
import axios from "axios";
import res from "../../utils/empresasResponseExample.json";
import SearchBar from "../../components/SearchBar";
import Empresa from "./Empresa";
import Modal from "react-native-modal";
import Filter from "./Filter";
import PaginationBar from "../../components/PaginationBar";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.empresa.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const EmpresasDeServiciosPortuarios = () => {
  const [data, setData] = React.useState();
  const [searchInput, setSearchInput] = React.useState("");
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  React.useEffect(() => {
    const fetchEmpresas = async () => {
      try {
        //const r = await axios.get(EMPRESAS_URL);
        //setData(r.data.empresas);
        setData(res.empresas);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEmpresas();
  }, []);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [filterData, setFilterData] = React.useState();
  const [filterDataPage, setFilterDataPage] = React.useState(0);

  React.useEffect(() => {
    if (!data) return;
    setFilterData(filterByText(data, searchInput));
  }, [data, searchInput]);

  React.useEffect(() => {
    if (!filterData) return;
    const newTotalPages = Math.ceil(
      filterData.length / PER_PAGE_RESULTS_EMPRESAS
    );
    setCurrentPage(1);
    setTotalPages(newTotalPages);
    setFilterDataPage(filterData.slice(0, PER_PAGE_RESULTS_EMPRESAS));
  }, [filterData]);

  const handlePageChange = React.useCallback(
    (nextPage) => {
      setFilterDataPage(
        filterData.slice(
          PER_PAGE_RESULTS_EMPRESAS * (nextPage - 1),
          PER_PAGE_RESULTS_EMPRESAS * nextPage
        )
      );
      setCurrentPage(nextPage);
    },
    [filterData]
  );

  const renderItem = ({ item }) => <Empresa item={item} />;

  const keyExtractor = React.useCallback((item) => item.id, []);

  const toggleFilter = React.useCallback(
    () => setIsFilterVisible((isFilterVisible) => !isFilterVisible),
    []
  );

  const searchPlaceholder = "Buscar por nombre";
  const noResultsMessage = "No se encontraron resultados";

  const options = [
    { id: "rubro1", label: "Rubro1" },
    { id: "rubro2", label: "Rubro2" },
  ];
  const [selectedOptions, setSelectedOptions] = React.useState(["rubro1"]);

  const onSelectedOption = (id) => {
    console.log("onSelectedOption Empresas");
    const filterArray = selectedOptions.filter((optionId) => optionId !== id);

    if (filterArray.length === selectedOptions.length) {
      filterArray.push(id);
    }

    setSelectedOptions(filterArray);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <SearchBar
            placeholder={searchPlaceholder}
            onChangeText={setSearchInput}
            value={searchInput}
          />
        </View>
        <View style={styles.filterIconContainer}>
          <Icon
            name="filter-list"
            type="material"
            //color="#00A0FF"
            onPress={toggleFilter}
          />
        </View>
      </View>
      {filterDataPage?.length ? (
        <View style={{ flex: 1 }}>
          <FlatList
            data={filterDataPage}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
          <View style={styles.paginationBar}>
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </View>
        </View>
      ) : (
        <Text style={styles.noResults}>{noResultsMessage}</Text>
      )}

      <Modal style={styles.modal} isVisible={isFilterVisible}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.closeIcon} onPress={toggleFilter}>
            <Icon name="close" type="material" />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Filter
              label="Rubro"
              options={options}
              selectedOptions={selectedOptions}
              onSelectedOption={onSelectedOption}
            />
          </View>
        </View>
      </Modal>
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
  modal: {
    backgroundColor: "white",
  },
  closeIcon: {
    alignSelf: "flex-end",
    padding: 10,
  },
  paginationBar: {
    height: 50,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});

export default EmpresasDeServiciosPortuarios;
