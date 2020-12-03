import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import SearchBar from "../../components/SearchBar";
import BuquesSection from "./BuquesSection";
import PaginationBar from "../../components/PaginationBar";
import useAxios from "../../hooks/useAxios";
import LoadingView from "../../components/LoadingView";
import {
  LISTADO_DE_BUQUES_URL,
  PER_PAGE_RESULTS_BUQUES,
} from "../../utils/constants";
import ErrorView from "../../components/ErrorView";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.nombre.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const ListadoDeBuques = () => {
  const [data, loading, error] = useAxios(LISTADO_DE_BUQUES_URL);
  const [searchInput, setSearchInput] = React.useState("");
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const flatListRef = React.useRef(null);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [filterData, setFilterData] = React.useState();
  const [filterDataPage, setFilterDataPage] = React.useState();

  React.useEffect(() => {
    if (!data || !data.listBuques) return;
    setFilterData(filterByText(data.listBuques, searchInput));
  }, [data, searchInput]);

  React.useEffect(() => {
    if (!filterData) return;
    const newTotalPages = Math.ceil(
      filterData.length / PER_PAGE_RESULTS_BUQUES
    );
    setCurrentPage(1);
    setTotalPages(newTotalPages);
    setFilterDataPage(filterData.slice(0, PER_PAGE_RESULTS_BUQUES));
  }, [filterData]);

  const handlePageChange = React.useCallback(
    (nextPage) => {
      setFilterDataPage(
        filterData.slice(
          PER_PAGE_RESULTS_BUQUES * (nextPage - 1),
          PER_PAGE_RESULTS_BUQUES * nextPage
        )
      );
      setCurrentPage(nextPage);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    },
    [filterData]
  );

  const searchPlaceholder = "Buscar por nombre";
  const noResultsMessage = "No se encontraron resultados";

  const toggleFilter = React.useCallback(
    () => setIsFilterVisible((isFilterVisible) => !isFilterVisible),
    []
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView msg="Error al cargar datos" />;

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
          <Icon name="filter-list" type="material" onPress={toggleFilter} />
        </View>
      </View>
      {filterDataPage && filterDataPage.length > 0 && (
        <View style={{ flex: 1 }}>
          <BuquesSection ref={flatListRef} buques={filterDataPage} />
          <View style={styles.paginationBar}>
            <PaginationBar
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </View>
        </View>
      )}
      {filterDataPage && filterDataPage.length === 0 && (
        <Text style={styles.noResults}>{noResultsMessage}</Text>
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

export default ListadoDeBuques;
