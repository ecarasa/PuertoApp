import React from "react";
import { StyleSheet } from "react-native";
import { EMPRESAS_URL, PER_PAGE_RESULTS_EMPRESAS } from "../../utils/constants";
import EmpresasSection from "./EmpresasSection";
import useAxios from "../../hooks/useAxios";
import ErrorView from "../../components/ErrorView";
import LoadingView from "../../components/LoadingView";
import PageListTemplate from "../../components/PageListTemplate";

const filterByText = (list, searchValue) => {
  return list?.filter((item) =>
    item.empresa.toLowerCase().includes(searchValue.toLowerCase())
  );
};

const EmpresasDeServiciosPortuarios = () => {
  const [data, loading, error] = useAxios(EMPRESAS_URL);

  const listSectionRender = React.useCallback((ref, filterDataPage) => (
    <EmpresasSection ref={ref} empresas={filterDataPage} />
  ));

  if (loading) return <LoadingView />;
  if (error) return <ErrorView msg="Error al cargar datos" />;

  return (
    <PageListTemplate
      data={data?.empresas}
      filterByText={filterByText}
      perPageResults={PER_PAGE_RESULTS_EMPRESAS}
      listSectionRender={listSectionRender}
    />
  );
};

const styles = StyleSheet.create({});

export default EmpresasDeServiciosPortuarios;
