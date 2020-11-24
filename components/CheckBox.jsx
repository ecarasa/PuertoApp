import React from "react";
import CheckBoxRNC from "@react-native-community/checkbox";

const CheckBox = ({ value, onValueChange, onChange, disabled }) => {
  return (
    <CheckBoxRNC
      value={value}
      onValueChange={onValueChange}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default CheckBox;
