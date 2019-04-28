import React from "react";
import { View } from "react-native";

const Margin = ({ margin = 40 }) => {
  return <View style={{ margin: margin / 2 }} />;
};

export default Margin;
