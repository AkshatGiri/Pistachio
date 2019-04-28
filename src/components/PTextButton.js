import { Text, TouchableOpacity } from "react-native";

import { BLACK } from "../utils/theme";
import React from "react";

const PTextButton = ({
  title,
  onPress,
  disabled,
  titleStyle,
  color,
  fontSize,
}) => {
  const styles = {
    button: {},
    title: {
      alignSelf: "center",
      color: color || BLACK,
      fontSize: fontSize || 20,
    },
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      disabled={disabled}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PTextButton;
