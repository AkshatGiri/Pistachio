import { StyleSheet, View } from "react-native";

import { BACKGROUND } from "../utils/theme";
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
    backgroundColor: BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 30,
  },
});
export default Skeletor;
