import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import Bandera from "../../components/Bandera";
import { getBuqueImgSource } from "../../utils/getBuqueImgSource";

/*
  {
    id: "78",
    nombre: "1510",
    imoNumber: "",
    senalDistintiva: "N/A",
    matricula: "01296",
    calado_construccion: "10",
    maxTeus: "130",
    eslora: "69.00",
    manga: "16.00",
    puntal: "5.00",
    tipoBuque: "9",
    tipoBuque_desc: "BARCAZA CARGA GENERAL",
    trb: "943",
    trn: "993",
    bandera: "AR",
  },
*/
const BuqueCard = ({ buque }) => {
  const [open, setOpen] = React.useState(false);
  const handlePress = React.useCallback(() => setOpen((open) => !open));

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={getBuqueImgSource(buque.tipoBuque)}
          />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.nombreContainer}>
            <Text style={styles.nombre}>{buque.nombre}</Text>
          </View>

          {open && (
            <View>
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
});

export default BuqueCard;
