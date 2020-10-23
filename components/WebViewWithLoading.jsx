import React from "react";
import WebView from "react-native-webview";
import WebViewLoading from "./WebViewLoading";

const WebViewWithLoading = React.forwardRef((props, ref) => {
  const [isWebViewLoading, setIsWebViewLoading] = React.useState(true);

  return (
    <WebView
      ref={ref}
      style={{ display: isWebViewLoading ? "none" : "flex" }}
      startInLoadingState={true}
      renderLoading={() => <WebViewLoading />}
      onLoadEnd={() => setIsWebViewLoading(false)}
      {...props}
    />
  );
});

export default WebViewWithLoading;
