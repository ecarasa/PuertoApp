import React from "react";
import { StyleSheet } from "react-native";
import BuquesSection from "./BuquesSection";
import useAxios from "../../hooks/useAxios";
import ErrorView from "../../components/ErrorView";
import LoadingView from "../../components/LoadingView";
import PageListTemplate from "../../components/PageListTemplate";
import {
  LISTADO_DE_BUQUES_URL,
  PER_PAGE_RESULTS_BUQUES,
} from "../../utils/constants";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.nombre.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const ListadoDeBuques = () => {
  const [data, loading, error] = useAxios(LISTADO_DE_BUQUES_URL);

  const listSectionRender = React.useCallback((ref, filterDataPage) => (
    <BuquesSection ref={ref} buques={filterDataPage} />
  ));

  if (loading) return <LoadingView />;
  if (error) return <ErrorView msg="Error al cargar datos" />;

  return (
    <PageListTemplate
      data={data?.listBuques}
      filterByText={filterByText}
      perPageResults={PER_PAGE_RESULTS_BUQUES}
      listSectionRender={listSectionRender}
    />
  );
};

const styles = StyleSheet.create({});

export default ListadoDeBuques;
