import React from "react";
import { StyleSheet, View, Text, Keyboard, Linking } from "react-native";
import { Button, Icon } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LoadingView from "../components/LoadingView";
import useAxiosLazy from "../hooks/useAxiosLazy";
import { LINTI_URL, LINTI_MAS_INFO_URL } from "../utils/constants";
import Strong from "../components/Strong";
import ErrorMsg from "../components/ErrorMsg";

const LintiInfo = ({ dni, sexo }) => {
  const [getInfo, { data, loading, error }] = useAxiosLazy();

  const handleMoreInfo = () => {
    Linking.openURL(LINTI_MAS_INFO_URL.replace("{dni}", dni));
  };

  React.useEffect(() => {
    if (!dni) return;
    getInfo(LINTI_URL.replace("{dni}", dni).replace("{sexo}", sexo));
  }, [dni]);

  if (dni === undefined) return null;
  if (!dni) return <ErrorMsg msg="Ingrese un D.N.I." />;

  if (loading) return <LoadingView />;
  if (error) return <ErrorMsg msg="Error al cargar datos" />;

  if (data && data.message) return <ErrorMsg msg={data.message} />;

  return (
    <View style={styles.lintiInfoContainer}>
      <Text style={[styles.textItem, styles.dni]}>{dni}</Text>
      <Text style={styles.textItem}>
        {"Nombre: "}
        <Strong> {`${data.apellido}, ${data.nombre}`}</Strong>
      </Text>
      <Text style={styles.textItem}>
        {"Sexo: "}
        <Strong>{data.sexo}</Strong>
      </Text>
      <Text style={styles.textItem}>
        {"Chofer retenido: "}
        <Strong style={data.choferRetenido && styles.invalidText}>{`${
          data.choferRetenido ? "SI" : "NO"
        }`}</Strong>
      </Text>
      <Text style={styles.textItem}>
        {"Licencia Vigente: "}
        <Strong style={!data.licenciaVigente && styles.invalidText}>{`${
          data.licenciaVigente ? "SI" : "NO"
        }`}</Strong>
      </Text>
      <Text style={styles.textItem}>
        {"Vigencia hasta: "}
        <Strong>{data.vigenciaHastaLnh}</Strong>
      </Text>
      <Button
        onPress={handleMoreInfo}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.buttonSecondary}
        titleStyle={styles.buttonTitle}
        title="MÁS INFORMACIÓN"
      />
    </View>
  );
};

const LINTI = () => {
  const [textValue, setTextValue] = React.useState("");
  const [dni, setDni] = React.useState();

  const handleConsulta = () => {
    setDni(textValue);
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Consulta de conductores habilitados</Text>
        <TextInput
          style={styles.textInput}
          placeholder="D.N.I. del conductor"
          value={textValue}
          onChangeText={setTextValue}
        />
        <Button
          onPress={handleConsulta}
          title="CONSULTAR CONDUCTOR"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonPrimary}
          titleStyle={styles.buttonTitle}
        />
        <LintiInfo dni={dni} sexo="M" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    height: 45,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#DEE2E6",
    borderRadius: 4,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    padding: 10,
    lineHeight: 22,
    margin: 10,
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: "#0072bb",
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  buttonSecondary: {
    backgroundColor: "#717171",
  },
  errorMsg: {
    color: "red",
    fontSize: 16,
  },
  lintiInfoContainer: {
    alignItems: "center",
    width: "100%",
  },
  textItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    fontSize: 18,
    textAlign: "center",
    width: "100%",
  },
  dni: {
    fontSize: 30,
    color: "#0072bb",
  },
  invalidText: {
    color: "red",
  },
});

export default LINTI;
