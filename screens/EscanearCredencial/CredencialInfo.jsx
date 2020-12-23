import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import useAxios from "../../hooks/useAxios";
import LoadingView from "../../components/LoadingView";
import ErrorView from "../../components/ErrorView";
import { TextInput } from "react-native";
import Rating from "../../components/Rating";
import SubmittingDataSection from "./SubmittingDataSection";

const CredencialInfo = ({ url }) => {
  const [data, loading, error] = useAxios(url);
  const [nombreYApellido, setNombreYApellido] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [observaciones, setObservaciones] = React.useState("");
  const [rating, setRating] = React.useState(3);

  const [submitted, setSubmitted] = React.useState(false);
  const submitEnabled = nombreYApellido && email;

  const handleAfipClick = React.useCallback(() => {
    if (data && data.afip) {
      Linking.openURL(data.afip);
    }
  }, []);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (loading) return <LoadingView />;
  if (error)
    return <ErrorView msg="Error al cargar información de la credencial" />;

  if (submitted) {
    return (
      <SubmittingDataSection
        nombreYApellido={nombreYApellido}
        email={email}
        observaciones={observaciones}
        rating={rating}
        credencial={data?.credencial}
      />
    );
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      {data.nya && (
        <View style={styles.nya}>
          <View style={{ flex: 1 }}>
            <View style={{ paddingRight: 5 }}>
              <Image
                source={{ uri: data.url_img }}
                style={styles.nyaImage}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <View>
              <Text style={styles.nyaText}>{data.nya}</Text>
              <Text
                style={styles.nyaTextOrganismo}
              >{`${data.organismo} - ${data.area}`}</Text>
            </View>
          </View>
        </View>
      )}

      {data.afip && (
        <View>
          <Text style={styles.afipText}>
            {"Estás hablando con un funcionario de AFIP"}
          </Text>
          <Text style={styles.afipText}>
            {"Para conocer sus datos ingresá "}
            <Text onPress={handleAfipClick} style={styles.afipClick}>
              {"aquí."}
            </Text>
          </Text>
        </View>
      )}

      <View style={{ marginTop: 10 }}>
        <View style={styles.formEntry}>
          <Text style={styles.label}>{"Nombre y Apellido"}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Por favor ingrese Nombre y Apellido"
            value={nombreYApellido}
            onChangeText={setNombreYApellido}
          />
        </View>
        <View style={styles.formEntry}>
          <Text style={styles.label}>{"Email"}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Por favor ingrese su email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.formEntry}>
          <Text style={styles.label}>{"Dejanos tu opinión"}</Text>
          <Rating
            labels={["Malo", "Regular", "Bueno", "Muy Bueno", "Excelente"]}
            rating={rating}
            onChangeRating={setRating}
          />
        </View>
        <View style={styles.formEntry}>
          <Text style={styles.label}>{"Observaciones"}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tus comentarios aquí (opcional)"
            value={observaciones}
            onChangeText={setObservaciones}
            multiline={true}
            numberOfLines={2}
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Button
          onPress={handleSubmit}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonSecondary}
          titleStyle={styles.buttonTitle}
          title="Enviar"
          disabled={!submitEnabled}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nya: {
    flexDirection: "row",
    maxHeight: 150,
  },
  nyaText: {
    color: "#0094D5",
    fontWeight: "bold",
    fontSize: 22,
  },
  nyaTextOrganismo: {
    color: "#4d4d4d",
    fontWeight: "bold",
    fontSize: 18,
  },
  nyaImage: {
    resizeMode: "contain",
    width: "100%",
    maxWidth: 100,
    aspectRatio: 1,
  },
  afipText: {
    color: "#4d4d4d",
    fontWeight: "bold",
    fontSize: 18,
  },
  afipClick: {
    color: "#0094D5",
  },
  formEntry: {
    paddingVertical: 5,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    flex: 1,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
    color: "#444",
    fontFamily: "GothamBook",
  },
  textInput: {
    marginVertical: 5,
    fontSize: 18,
    fontFamily: "GothamBook",
  },
  buttonContainer: {
    width: "80%",
    maxWidth: 250,
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: "#0072bb",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default CredencialInfo;
