import React from "react";
import ErrorMsg from "./ErrorMsg";

const ErrorView = ({ msg }) => (
  <ErrorMsg
    containerStyle={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    msg={msg}
  />
);

export default ErrorView;
