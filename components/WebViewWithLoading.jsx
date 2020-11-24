import React from "react";
import WebView from "react-native-webview";
import LoadingView from "./LoadingView";

const WebViewWithLoading = React.forwardRef((props, ref) => {
  const [isWebViewLoading, setIsWebViewLoading] = React.useState(true);

  return (
    <WebView
      ref={ref}
      style={{ display: isWebViewLoading ? "none" : "flex" }}
      startInLoadingState={true}
      renderLoading={() => <LoadingView />}
      onLoadEnd={() => setIsWebViewLoading(false)}
      {...props}
    />
  );
});

export default WebViewWithLoading;
