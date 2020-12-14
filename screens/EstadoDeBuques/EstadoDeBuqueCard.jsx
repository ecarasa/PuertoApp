import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Bandera from "../../components/Bandera";
import Dash from "react-native-dash";
import LoadingView from "../../components/LoadingView";
import {
  getBuqueImgSource,
  BUQUES_IMG_SOURCES,
} from "../../utils/getBuqueImgSource";
import useAxiosLazy from "../../hooks/useAxiosLazy";
import { BUQUE_INFO_URL } from "../../utils/constants";
import ErrorView from "../../components/ErrorView";

/*
  {
    idBuque: "130",
    estado: "Autorizado",
    numero_giro: "7315",
    buque: "RAUL D",
    eta: "26/11/2020 07:00",
    etd: "27/11/2020 07:00",
    terminal: "APM Terminals",
    ter_desc: "302 - DNA C/NORTE 1RA",
    agencia: "Wipon S.R.L.",
  },
*/

const EstadoDeBuqueCard = ({ buque }) => {
  const [open, setOpen] = React.useState(false);
  const [loadBuqueInfo, { data, loading, error }] = useAxiosLazy();
  const [loadBuqueInfoFlag, setLoadBuqueInfoFlag] = React.useState(false);

  const handlePress = React.useCallback(() => {
    setOpen((open) => !open);
    if (!loadBuqueInfoFlag) {
      setLoadBuqueInfoFlag(true);
    }
  }, [loadBuqueInfoFlag]);

  React.useEffect(() => {
    if (!loadBuqueInfoFlag) return;
    return loadBuqueInfo(BUQUE_INFO_URL.replace("{idBuque}", buque.idBuque));
  }, [loadBuqueInfoFlag]);

  const buqueInfo = data?.listBuques[0];

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={BUQUES_IMG_SOURCES[1]} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.nombreContainer}>
            <Text style={styles.nombre}>{buque.buque}</Text>
          </View>

          <View>
            <Text style={styles.textItem}>{`Estado: ${buque.estado}`}</Text>
            <Text style={styles.textItem}>{`Terminal: ${buque.terminal}`}</Text>
            <Text style={styles.textItem}>{`Arribo: ${buque.eta}`}</Text>
            <Text style={styles.textItem}>{`Partida: ${buque.etd}`}</Text>
            <Text style={styles.textItem}>{`Agencia: ${buque.agencia}`}</Text>
            <Text style={styles.textItem}>
              {`Número de Giro: ${buque.numero_giro}`}
            </Text>
          </View>

          <View style={{ display: open ? "flex" : "none" }}>
            <View>
              <Dash
                dashColor="#DDDDDD"
                style={{
                  width: "100%",
                  height: 1,
                  marginTop: 10,
                  marginBottom: 20,
                }}
              />
              {loading && <LoadingView />}
              {error && (
                <Text style={styles.textItem}>{"No hay más información"}</Text>
              )}
              {buqueInfo && (
                <View>
                  <Text style={styles.textItem}>
                    {`Matrícula: ${buqueInfo.matricula}`}
                  </Text>
                  <Text style={styles.textItem}>
                    {`Calado Construcción: ${buqueInfo.calado_construccion}`}
                  </Text>
                  <Text style={styles.textItem}>
                    {`Eslora: ${buqueInfo.eslora}`}
                  </Text>
                  <View style={styles.banderaSection}>
                    <Text style={styles.textItem}>
                      {`Bandera: ${buqueInfo.bandera}`}
                    </Text>
                    <Bandera
                      code={buqueInfo.bandera}
                      containerStyle={styles.banderaContainer}
                    />
                  </View>
                  <Text style={styles.textItem}>
                    {`Tipo de Buque: ${buqueInfo.tipoBuque_desc}`}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>
        <View style={styles.closeContainer}>
          <Icon
            name={open ? "minus" : "plus"}
            type="antdesign"
            iconStyle={{ opacity: 0.3 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    padding: 10,
  },
  imgContainer: {
    flex: 2,
    alignItems: "center",
  },
  bodyContainer: {
    flex: 8,
  },
  closeContainer: {
    height: 50,
    justifyContent: "center",
  },
  nombreContainer: {
    justifyContent: "center",
    height: 50,
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  textItem: {
    marginBottom: 10,
    lineHeight: 20,
    fontSize: 14,
  },
  banderaSection: {
    flexDirection: "row",
    alignContent: "center",
  },
  banderaContainer: {
    height: 20,
    width: 26.66,
    padding: 0,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderStyle: "solid",
  },
});

export default EstadoDeBuqueCard;
