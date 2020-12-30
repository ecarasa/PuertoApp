import React from "react";
import PropTypes from "prop-types";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import CheckBox from "./CheckBox";

const DropdownItem = ({ id, label, icon, selected, onSelectedOption }) => {
  return (
    <TouchableHighlight
      style={styles.dropdownItemContainer}
      onPress={() => {
        console.log("onPress");
        onSelectedOption();
      }}
    >
      <View style={{ flex: 1, flexDirection: "row" }}>
        <CheckBox value={selected} onValueChange={onSelectedOption} />
        <View style={styles.dropdownItemContent}>
          <Text>{label}</Text>
          {icon ? icon() : null}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const SearchablePicker = ({
  placeholder,
  dropdownMaxHeight,
  options,
  selectedOptions,
  onSelectedOption,
  zIndex,
}) => {
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const [top, setTop] = React.useState(0);
  const [textInput, setTextInput] = React.useState("");
  const [items, setItems] = React.useState([]);

  const onSelectedOptionForItem = React.useCallback(
    (id) => () => onSelectedOption(id),
    [onSelectedOption]
  );

  React.useEffect(() => {
    setItems(
      options.filter(
        (item) =>
          item.label &&
          item.label.toLowerCase().includes(textInput.toLowerCase())
      )
    );
  }, [textInput]);

  React.useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <View style={styles.container}>
      <View
        onLayout={(event) => {
          setTop(event.nativeEvent.layout.height);
        }}
      >
        <TextInput
          value={textInput}
          onChangeText={setTextInput}
          style={styles.textInput}
          placeholder={placeholder}
          onFocus={() => setDropdownVisible(true)}
        />
      </View>

      <View
        style={[
          styles.dropdownBox,
          !isDropdownVisible && styles.hidden,
          {
            top: top,
            maxHeight: dropdownMaxHeight,
            zIndex,
          },
        ]}
      >
        <ScrollView style={{ flex: 1 }}>
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              {...item}
              selected={selectedOptions.includes(item.id)}
              onSelectedOption={onSelectedOptionForItem(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

SearchablePicker.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.func,
    })
  ).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectedOption: PropTypes.func.isRequired,
  dropdownMaxHeight: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#DEE2E6",
  },
  hidden: {
    position: "relative",
    display: "none",
    borderWidth: 0,
  },
  dropdownBox: {
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderColor: "#DEE2E6",
    backgroundColor: "white",
  },
  dropdownItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownItemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});

SearchablePicker.defaultProps = {
  dropdownMaxHeight: 150,
  zIndex: 9999,
};

export default SearchablePicker;
