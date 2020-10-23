import React from "react";
import WebViewWithLoading from "../components/WebViewWithLoading";
import { CHAT_URL } from "../utils/constants";


const ChatDelPuerto = () => {
  return <WebViewWithLoading source={{ uri: CHAT_URL }} />;
};

export default ChatDelPuerto;
