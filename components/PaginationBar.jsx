import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => {
  const text = `${currentPage} de ${totalPages}`;
  const handlePageChange = React.useCallback(
    (nextPage) => {
      if (nextPage < 0 || nextPage > totalPages || currentPage === nextPage)
        return;
      onPageChange(nextPage);
    },
    [onPageChange, currentPage, totalPages]
  );

  const [pickerItems, setPickerItems] = React.useState([]);

  React.useEffect(() => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(<Picker.Item label={`${i}`} value={i} key={i} />);
    }
    setPickerItems(items);
  }, [totalPages]);

  return (
    <View style={styles.container}>
      <View style={styles.pageDescription}>
        <Text>{text}</Text>
      </View>

      <View style={styles.arrows}>
        <Icon
          name="keyboard-arrow-left"
          type="material"
          size={35}
          disabled={currentPage === 1}
          disabledStyle={{ backgroundColor: "white" }}
          iconStyle={{ opacity: currentPage === 1 ? 0.3 : 1 }}
          onPress={() => handlePageChange(currentPage - 1)}
        />
        <Icon
          name="keyboard-arrow-right"
          type="material"
          size={35}
          disabled={currentPage === totalPages}
          disabledStyle={{ backgroundColor: "white" }}
          iconStyle={{ opacity: currentPage === totalPages ? 0.3 : 1 }}
          onPress={() => handlePageChange(currentPage + 1)}
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={currentPage}
          onValueChange={handlePageChange}
          style={{ width: 100 }}
        >
          {pickerItems}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  pageDescription: {
    flex: 1,
    justifyContent: "center",
  },
  arrows: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PaginationBar;
