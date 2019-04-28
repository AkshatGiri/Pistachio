import { StyleSheet, View } from "react-native";

import { BACKGROUND } from "../utils/theme";
import React from "react";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    flex: 1,
    alignSelf: "center",
    backgroundColor: BACKGROUND,
  },
});

export default Container;
