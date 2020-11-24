import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingView = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#999999" />
    </View>
  );
};

export default LoadingView;
