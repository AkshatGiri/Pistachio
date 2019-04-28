import { SafeAreaView, StyleSheet, View } from "react-native";

import { BACKGROUND } from "../utils/theme";
import React from "react";

const Container = ({ children, style, ...props }) => {
  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
    backgroundColor: BACKGROUND,
  },
});

export default Container;
