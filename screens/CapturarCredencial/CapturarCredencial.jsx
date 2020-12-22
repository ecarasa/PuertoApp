import React from "react";
import { StyleSheet } from "react-native";
import CameraPreview from "./CameraPreview";
import Camera from "./Camera";
import FormSection from "./FormSection";

const CapturarCredencial = () => {
  const [photo, setPhoto] = React.useState(null);
  const [showCameraSection, setShowCameraSection] = React.useState(true);

  const handleCapturedImage = (capturedImage) => {
    setPhoto(capturedImage);
  };

  const handleRetake = () => {
    setPhoto(null);
  };

  const handleConfirm = () => {
    setShowCameraSection(false);
  };

  if (showCameraSection) {
    return photo ? (
      <CameraPreview
        photo={photo}
        onRetake={handleRetake}
        onConfirm={handleConfirm}
      />
    ) : (
      <Camera onCapturedImage={handleCapturedImage} />
    );
  } else {
    return <FormSection photo={photo} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CapturarCredencial;
