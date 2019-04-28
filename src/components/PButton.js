import {
  BUTTON_BG_COLOR,
  BUTTON_BG_DISABLED_COLOR,
  BUTTON_TEXT_COLOR,
} from "../utils/theme";
import { Text, TouchableOpacity } from "react-native";

import React from "react";

const PButton = ({
  title,
  subTitle,
  onPress,
  buttonStyle,
  titleStyle,
  subTitleStyle,
  disabled,
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
      fontSize: 20,
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
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subTitle != null && (
        <Text style={[styles.subTitle, subTitleStyle]}>{subTitle}</Text>
      )}
    </TouchableOpacity>
  );
};

export default PButton;
