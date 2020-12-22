import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Camera as CameraExpo } from "expo-camera";

const Camera = ({ onCapturedImage }) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraExpo.Constants.Type.back);
  const camera = React.useRef();

  const [flashMode, setFlashMode] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await CameraExpo.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCamera = async () => {
    console.log("handleCamera");

    if (camera) {
      let photo = await camera.current.takePictureAsync({
        skipProcessing: true,
      });
      onCapturedImage(photo);
    }
  };

  const handleFlash = () => {
    console.log("handleFlash");
    setFlashMode((flashMode) => !flashMode);
  };

  const handleFlip = () => {
    setType(
      type === CameraExpo.Constants.Type.back
        ? CameraExpo.Constants.Type.front
        : CameraExpo.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <CameraExpo
        style={styles.camera}
        type={type}
        ref={camera}
        flashMode={
          flashMode
            ? CameraExpo.Constants.FlashMode.on
            : CameraExpo.Constants.FlashMode.off
        }
      >
        <View style={styles.buttonContainer}>
          {/*        <TouchableOpacity style={styles.button} onPress={handleFlash}>
            <Icon
              name={flashMode ? "flash-on" : "flash-off"}
              type="material"
              size={44}
              color="white"
            />
          </TouchableOpacity> */}

          <TouchableOpacity
            style={[styles.button, { alignItems: "flex-start" }]}
            onPress={handleFlip}
          >
            <Icon
              name="switch-camera"
              type="material"
              size={44}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCamera}>
            <Icon name="ios-camera" type="ionicon" size={44} color="white" />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
        </View>
      </CameraExpo>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
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

export default Camera;
