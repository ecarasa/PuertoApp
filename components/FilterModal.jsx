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

const FilterModal = ({
  isVisible,
  onClose,
  options,
  selectedOptions,
  onSelectedOption,
}) => {
  return (
    <Modal style={styles.modal} isVisible={isVisible}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
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
