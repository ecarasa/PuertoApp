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

  const filterEntries = [
    {
      id: "rubro",
      label: "Rubro",
      options: [
        { id: "rubro1", label: "Rubro1" },
        { id: "rubro2", label: "Rubro2" },
      ],
    },
  ];

  const _selectedFilterEntries = [
    {
      id: "rubro",
      label: "Rubro",
      options: [
        { id: "rubro1", label: "Rubro1" },
      ],
    },
  ]

  const [selectedFilterEntries, setSelectedFilterEntries] = React.useState(_selectedFilterEntries);

  const onSelectedFilterEntriesChange = (newSelectedFilterEntries) => {
    setSelectedFilterEntries(newSelectedFilterEntries);
    return;
    console.log("onSelectedOption Empresas");
    const filterArray = selectedOptions.filter((optionId) => optionId !== id);

    if (filterArray.length === selectedOptions.length) {
      filterArray.push(id);
    }

    setSelectedOptions(filterArray);
  };

  if (loading) return <LoadingView />;
  if (error) return <ErrorView msg="Error al cargar datos" />;

  return (
    <PageListTemplate
      data={data?.empresas}
      filterByText={filterByText}
      perPageResults={PER_PAGE_RESULTS_EMPRESAS}
      listSectionRender={listSectionRender}
      showFilter={true}
      filterEntries={filterEntries}
      selectedFilterEntries={selectedFilterEntries}
      onSelectedFilterEntriesChange={onSelectedFilterEntriesChange}
    />
  );
};

const styles = StyleSheet.create({});

export default EmpresasDeServiciosPortuarios;
