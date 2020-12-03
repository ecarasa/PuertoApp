import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ErrorView from "../../components/ErrorView";
import LoadingView from "../../components/LoadingView";
import PageListTemplate from "../../components/PageListTemplate";
import useAxios from "../../hooks/useAxios";
import {
  ESTADO_DE_BUQUES_URL,
  PER_PAGE_RESULTS_ESTADO_BUQUES,
} from "../../utils/constants";
import EstadoDeBuquesSection from "./EstadoDeBuquesSection";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.buque.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const EstadoDeBuques = () => {
  const [data, loading, error] = useAxios(ESTADO_DE_BUQUES_URL);

  const listSectionRender = React.useCallback((ref, filterDataPage) => (
    <EstadoDeBuquesSection ref={ref} buques={filterDataPage} />
  ));

  if (loading) return <LoadingView />;
  if (error) return <ErrorView msg="Error al cargar datos" />;

  return (
    <PageListTemplate
      data={data}
      filterByText={filterByText}
      perPageResults={PER_PAGE_RESULTS_ESTADO_BUQUES}
      listSectionRender={listSectionRender}
    />
  );
};

const styles = StyleSheet.create({});

export default EstadoDeBuques;
