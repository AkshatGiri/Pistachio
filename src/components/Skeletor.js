import { StyleSheet, View } from "react-native";

import PText from "./PText";
import React from "react";

const Skeletor = () => {
  return (
    <View style={styles.container}>
      <PText>Skeletor</PText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 30
  }
});
export default Skeletor;
