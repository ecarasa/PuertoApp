import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import CredencialInfo from "./CredencialInfo";

const CodeScanner = ({ onBarCodeScanned }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    onBarCodeScanned({ type, data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.codeScannerContainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            {"Conocé con quien estás hablando"}
          </Text>
        </View>
      </BarCodeScanner>
    </View>
  );
};

const EscanearCredencial = () => {
  const [data, setData] = useState();

  const handleBarCodeScanned = ({ data, type }) => {
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setData(data);
  };

  return (
    <View style={styles.container}>
      {!data && <CodeScanner onBarCodeScanned={handleBarCodeScanned} />}
      {data && <CredencialInfo url={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  codeScannerContainer: {
    flex: 1,
  },
});

export default EscanearCredencial;
