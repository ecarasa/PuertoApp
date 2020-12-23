import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import useAxiosPost from "../../hooks/useAxiosPost";
import ErrorMsg from "../../components/ErrorMsg";
import { PHOTO_UPLOAD_URL } from "../../utils/constants";
import * as ImageManipulator from "expo-image-manipulator";

const SubmittingDataSection = ({
  nombreYApellido,
  email,
  observaciones,
  rating,
  photo,
}) => {
  const reqData = async () => {
    const formData = new FormData();
    formData.append("nya", nombreYApellido);
    formData.append("mail", email);
    formData.append("obs", observaciones);
    formData.append("puntaje", rating);
    const compressedPhoto = await ImageManipulator.manipulateAsync(
      photo.uri,
      //[{ resize: { width: 100 } }],
      [],
      { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
    );

    formData.append("foto", {
      uri: compressedPhoto.uri,
      type: "image/jpeg",
      name: "foto.jpg",
    });
    return formData;
  };

  const [data, loading, error] = useAxiosPost(PHOTO_UPLOAD_URL, reqData);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0072bb" />
        <Text style={{ fontFamily: "GothamBook", color: "#0072bb" }}>
          {"Enviando credencial"}
        </Text>
      </View>
    );
  }

  /*   if (error) {
    console.log(error);
    return (
      <ErrorMsg
        containerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        msg="Error al enviar la credencial"
      />
    );
  } */

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon
        name="ios-checkmark-circle"
        color="#0072bb"
        type="ionicon"
        size={32}
      />
      <Text style={{ fontFamily: "GothamBook", color: "#0072bb" }}>
        {"Credencial enviada"}
      </Text>
    </View>
  );
};

export default SubmittingDataSection;
