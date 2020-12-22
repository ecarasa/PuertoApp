import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-elements";
import Rating from "../../components/Rating";

const FormSection = ({ photo }) => {
  const [nombreYApellido, setNombreYApellido] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [observaciones, setObservaciones] = React.useState("");

  const submitEnabled = nombreYApellido && email;

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={styles.nya}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingRight: 5 }}>
            <Image source={photo} style={styles.nyaImage} />
          </View>
        </View>
        <View style={{ flex: 3 }}></View>
      </View>

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
  nyaImage: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
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

export default FormSection;
