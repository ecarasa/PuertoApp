import React from "react";
import { StyleSheet, View, Text, Keyboard, Linking } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import LoadingView from "../components/LoadingView";
import useAxiosLazy from "../hooks/useAxiosLazy";
import { VEHICULOS_URL, VEHICULOS_MAS_INFO_URL } from "../utils/constants";
import Strong from "../components/Strong";
import ErrorMsg from "../components/ErrorMsg";

const VehiculosInfo = ({ dominio }) => {
  const [getInfo, { data, loading, error }] = useAxiosLazy();

  const handleMoreInfo = () => {
    Linking.openURL(VEHICULOS_MAS_INFO_URL.replace("{dominio}", dominio));
  };

  React.useEffect(() => {
    if (!dominio) return;
    getInfo(VEHICULOS_URL.replace("{dominio}", dominio));
  }, [dominio]);

  if (!dominio) return <ErrorMsg msg="Ingrese un dominio" />;

  if (loading) return <LoadingView />;
  if (error) return <ErrorMsg msg="Error al cargar datos" />;

  if (!data?.data?.results || data.data.results.length === 0)
    return <ErrorMsg msg={`Sin información sobre el dominio ${dominio}`} />;

  const info = data.data.results[0];
  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.textItem, styles.dominio]}>{info.dominio}</Text>
      {info.anioModelo && (
        <Text style={styles.textItem}>
          {"Año y modelo: "}
          <Strong> {info.anioModelo}</Strong>
        </Text>
      )}
      {(info.parqueMovilSimplificado.tipoVehiculo.descripcion ||
        info.carroceria.tipoVehiculo.descripcion) && (
        <Text style={styles.textItem}>
          {"Tipo de vehículo: "}
          <Strong>
            {info.parqueMovilSimplificado.tipoVehiculo.descripcion ||
              info.carroceria.tipoVehiculo.descripcion}
          </Strong>
        </Text>
      )}
      {info.parqueMovilSimplificado.chasisModelo && (
        <Text style={styles.textItem}>
          {"Chasis modelo: "}
          <Strong>{parqueMovilSimplificado.chasisModelo}</Strong>
        </Text>
      )}
      {info.parqueMovilSimplificado.chasisMarca.descripcion && (
        <Text style={styles.textItem}>
          {"Chasis marca: "}
          <Strong>
            {info.parqueMovilSimplificado.chasisMarca.descripcion}
          </Strong>
        </Text>
      )}
      {(info.parqueMovilSimplificado.tipoCarroceria.descripcion ||
        carroceria.tipoCarroceria.descripcion) && (
        <Text style={styles.textItem}>
          {"Tipo de carrocería: "}
          <Strong>
            {info.parqueMovilSimplificado.tipoCarroceria.descripcion ||
              carroceria.tipoCarroceria.descripcion}
          </Strong>
        </Text>
      )}
      {info.cantAsientos && (
        <Text style={styles.textItem}>
          {"Cantidad de asientos: "}
          <Strong>{info.cantAsientos}</Strong>
        </Text>
      )}
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

const VehiculosHabilitados = () => {
  const [textValue, setTextValue] = React.useState("");
  const [dominio, setDominio] = React.useState();

  const handleConsulta = () => {
    setDominio(textValue);
    Keyboard.dismiss();
  };

  const title =
    "Consulta de Dominios/Patentes de Transporte de Pasajeros Automotor Habilitados";

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Ej: DIC918"
          value={textValue}
          onChangeText={setTextValue}
        />
        <Button
          onPress={handleConsulta}
          title="CONSULTAR DOMINIO"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonPrimary}
          titleStyle={styles.buttonTitle}
        />
        {dominio !== undefined && <VehiculosInfo dominio={dominio} />}
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
    fontSize: 16,
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
  infoContainer: {
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
  dominio: {
    fontSize: 30,
    color: "#0072bb",
  },
  invalidText: {
    color: "red",
  },
});

export default VehiculosHabilitados;
