import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Icon } from "react-native-elements";
import useAxiosPost from "../../hooks/useAxiosPost";
import ErrorMsg from "../../components/ErrorMsg";
import { DATOS_TRAMITES_URL } from "../../utils/constants";

const SubmittingDataSection = ({
  nombreYApellido,
  email,
  observaciones,
  rating,
  credencial,
}) => {
  const reqParams = async () => {
    const params = {
      datosTramite: {
        Nombre: nombreYApellido,
        Email: email,
        Credencial: parseInt(credencial),
        Location: {
          latitud: -99.9999,
          longitud: -99.9999,
        },
        Calificacion: rating,
        Comentario: observaciones,
        TipoTramite: "",
      },
    };
    return params;
  };

  const [data, loading, error] = useAxiosPost(
    DATOS_TRAMITES_URL,
    null,
    reqParams
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0072bb" />
        <Text style={{ fontFamily: "GothamBook", color: "#0072bb" }}>
          {"Enviando datos"}
        </Text>
      </View>
    );
  }

  if (error) {
    console.log(error);
    return (
      <ErrorMsg
        containerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        msg="Error al enviar los datos"
      />
    );
  }

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
        {"¡Enviado!"}
      </Text>
    </View>
  );
};

export default SubmittingDataSection;
