import React from "react";
import { Linking } from "react-native";
import WebViewWithLoading from "../components/WebViewWithLoading";
import { TWITTER_FEED_URL } from "../utils/constants";

const Twitter = () => {
  const handleShouldStartLoadWithRequest = (request) => {
    Linking.openURL(request.url);
    return false;
  };

  return (
    <WebViewWithLoading
      source={{ uri: TWITTER_FEED_URL }}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      scalesPageToFit={false}
    />
  );
};

export default Twitter;
