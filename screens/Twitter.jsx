import React from "react";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";
import WebViewLoading from "../components/WebViewLoading";
import { TWITTER_FEED_URL } from "../utils/constants";

const Twitter = () => {
  const handleShouldStartLoadWithRequest = (request) => {
    Linking.openURL(request.url);
    return false;
  };

  return (
    <WebView
      source={{ uri: TWITTER_FEED_URL }}
      scalesPageToFit={false}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      startInLoadingState={true}
      renderLoading={() => <WebViewLoading />}
    />
  );
};

export default Twitter;
