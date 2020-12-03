import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Bandera from "../../components/Bandera";
import {
  getBuqueImgSource,
  BUQUES_IMG_SOURCES,
} from "../../utils/getBuqueImgSource";
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
  const handlePress = React.useCallback(() => setOpen((open) => !open));

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
          {open && (
            <View
              style={{
                borderStyle: "dashed",
                borderTopWidth: 1,
                paddingTop: 20,
                marginTop: 20,
              }}
            >
              <Text
                style={styles.textItem}
              >{`Matrícula: ${buque.matricula}`}</Text>
              <Text style={styles.textItem}>
                {`Calado Construcción: ${buque.calado_construccion}`}
              </Text>
              <Text style={styles.textItem}>{`Eslora: ${buque.eslora}`}</Text>
              <View>
                <Text style={styles.textItem}>
                  {`Bandera: ${buque.bandera}`}
                </Text>
                <Bandera code={buque.bandera} />
              </View>
              <Text style={styles.textItem}>
                {`Tipo de Buque: ${buque.tipoBuque_desc}`}
              </Text>
            </View>
          )}
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
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
  textItem: {
    marginBottom: 10,
    lineHeight: 20,
    fontSize: 14,
  },
});

export default EstadoDeBuqueCard;
