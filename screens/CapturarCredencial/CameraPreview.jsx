import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";

const CameraPreview = ({ photo, onConfirm, onRetake }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { alignItems: "flex-start" }]}
            onPress={onRetake}
          >
            <Icon
              name="redo-variant"
              type="material-community"
              size={44}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onConfirm}>
            <Icon
              name="check"
              type="material-community"
              size={44}
              color="white"
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
  },
});

export default CameraPreview;
