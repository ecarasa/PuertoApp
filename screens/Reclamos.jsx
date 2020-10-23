import React from "react";
import { BackHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { RECLAMOS_URL } from "../utils/constants";
import WebViewWithLoading from "../components/WebViewWithLoading";

const Reclamos = () => {
  const [canWebViewGoBack, setCanWebViewGoBack] = React.useState(false);
  const webView = React.useRef(null);

  const handleNavigationStateChange = React.useCallback((navState) => {
    setCanWebViewGoBack(navState.canGoBack);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (canWebViewGoBack) {
          webView.current.goBack();
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [canWebViewGoBack])
  );


  return (
    <WebViewWithLoading
      ref={webView}
      source={{ uri: RECLAMOS_URL }}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};

export default Reclamos;
