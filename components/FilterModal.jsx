import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import Filter from "./Filter";

/*
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
      options: [
        { id: "rubro1", label: "Rubro1" },
      ],
    },
  ]
*/

const FilterModal = ({
  isVisible,
  onClose,
  filterEntries,
  selectedFilterEntries,
  onSelectedFilterEntriesChange,
}) => {
  const filters = filterEntries.map((filterEntry) => {
    return (
      <Filter
        filterEntry={filterEntry}
        selectedFilterEntry={selectedFilterEntries.find(
          (selectedFilterEntry) => selectedFilterEntry.id === filterEntry.id
        )}
        onFilterEntryChange={(newFilterEntry) => {
          onSelectedFilterEntriesChange(
            selectedFilterEntries.map((selectedFilterEntry) =>
              selectedFilterEntry.id === newFilterEntry.id
                ? newFilterEntry
                : selectedFilterEntry
            )
          );
        }}
        key={filterEntry.id}
      />
    );
  });
  return (
    <Modal style={styles.modal} isVisible={isVisible}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <Icon name="close" type="material" />
        </TouchableOpacity>
        <View style={{ flex: 1 }}>{filters}</View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
  },
  closeIcon: {
    alignSelf: "flex-end",
    padding: 10,
  },
});

export default FilterModal;
