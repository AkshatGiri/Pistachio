import {
  DARK_TEXT,
  GREY_TEXT,
  LIGHT_GREY,
  LIGHT_TEXT,
  WHITE,
  TABLET_BG_COLOR
} from "../utils/theme";

import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";

const PText = ({
  size,
  children,
  bold,
  italic,
  color = "light",
  fontWeight,
  ...props
}) => {
  let fontStyle = {};
  fontStyle.fontFamily = "CircularStd-Book";
  switch (size) {
    case "xs":
      fontStyle.fontSize = 13;
      break;
    case "s":
      fontStyle.fontSize = 16;
      break;
    case "m":
      fontStyle.fontSize = 20;
      break;
    case "l":
      fontStyle.fontSize = 30;
      break;
    case "xl":
      fontStyle.fontSize = 40;
      break;
    default:
      fontStyle.fontSize = 20;
      break;
  }

  switch (color) {
    case "light":
      fontStyle.color = LIGHT_TEXT;
      break;
    case "dark":
      fontStyle.color = DARK_TEXT;
      break;
    case "accent":
      fontStyle.color = TABLET_BG_COLOR;
      break;
    case "grey":
      fontStyle.color = GREY_TEXT;
      break;
  }
  if (bold) fontStyle.fontWeight = "bold";
  if (italic) fontStyle.fontStyle = "italic";

  if (fontWeight) fontStyle.fontWeight = fontWeight;
  return (
    <Text {...props} style={[fontStyle, props.style]}>
      {children}
    </Text>
  );
};

PText.propTypes = {
  size: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  color: PropTypes.oneOf(["light", "dark", "grey", "accent"]),
  fontWeight: PropTypes.string,
};

export default PText;
