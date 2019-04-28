import { StyleSheet, View } from "react-native";

import React from "react";

const Row = props => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Row;
