import { SafeAreaView, StyleSheet, View } from "react-native";

import { BACKGROUND } from "../utils/theme";
import React from "react";

const Container = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: BACKGROUND,
  },
});

export default Container;
