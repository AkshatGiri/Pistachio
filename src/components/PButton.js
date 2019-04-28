import {
  BUTTON_BG_COLOR,
  BUTTON_BG_DISABLED_COLOR,
  BUTTON_TEXT_COLOR,
} from "../utils/theme";
import { Text, TouchableOpacity } from "react-native";

import PText from "./PText";
import React from "react";

const PButton = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
  disabled,
  bold,
}) => {
  const styles = {
    button: {
      backgroundColor: disabled ? BUTTON_BG_DISABLED_COLOR : BUTTON_BG_COLOR,
      borderRadius: 100,
      marginVertical: 10,
      width: "100%",
      padding: 10,
      shadowColor: BUTTON_BG_COLOR,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.33,
      shadowRadius: 8.16,
      elevation: 20,
    },
    title: {
      alignSelf: "center",
      color: BUTTON_TEXT_COLOR,
      padding: 3,
    },
    subTitle: {
      alignSelf: "center",
      color: BUTTON_TEXT_COLOR,
      fontSize: 13,
    },
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      disabled={disabled}
    >
      <PText style={[styles.title, titleStyle]} bold={bold}>
        {title}
      </PText>
    </TouchableOpacity>
  );
};

export default PButton;
