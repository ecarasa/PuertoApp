import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import SearchBar from "./SearchBar";
import PaginationBar from "./PaginationBar";
import FilterModal from "./FilterModal";

const PageListTemplate = ({
  filterByText,
  listSectionRender,
  searchPlaceholder = "Buscar por nombre",
  noResultsMessage = "No se encontraron resultados",
  data,
  perPageResults,
  showFilter = false,
  filterEntries,
  selectedFilterEntries,
  onSelectedFilterEntriesChange,
}) => {
  const [searchInput, setSearchInput] = React.useState("");
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);
  const flatListRef = React.useRef(null);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [filterData, setFilterData] = React.useState();
  const [filterDataPage, setFilterDataPage] = React.useState();

  React.useEffect(() => {
    if (!data) return;
    setFilterData(filterByText(data, searchInput));
  }, [data, searchInput]);

  React.useEffect(() => {
    if (!filterData) return;
    const newTotalPages = Math.ceil(filterData.length / perPageResults);
    setCurrentPage(1);
    setTotalPages(newTotalPages);
    setFilterDataPage(filterData.slice(0, perPageResults));
  }, [filterData]);

  const handlePageChange = React.useCallback(
    (nextPage) => {
      setFilterDataPage(
        filterData.slice(
          perPageResults * (nextPage - 1),
          perPageResults * nextPage
        )
      );
      setCurrentPage(nextPage);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    },
    [filterData]
  );

  const toggleFilter = React.useCallback(
    () => setIsFilterVisible((isFilterVisible) => !isFilterVisible),
    []
  );

  const handleClose = () => {
    setIsFilterVisible(false);
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
          {showFilter && (
            <Icon name="filter-list" type="material" onPress={toggleFilter} />
          )}
        </View>
      </View>
      {filterDataPage && filterDataPage.length > 0 && (
        <View style={{ flex: 1 }}>
          {listSectionRender(flatListRef, filterDataPage)}
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
      {showFilter && (
        <FilterModal
          isVisible={isFilterVisible}
          onClose={handleClose}
          filterEntries={filterEntries}
          selectedFilterEntries={selectedFilterEntries}
          onSelectedFilterEntriesChange={onSelectedFilterEntriesChange}
        />
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

export default PageListTemplate;
