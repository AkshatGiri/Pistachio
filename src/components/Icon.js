import { Image } from "react-native";
import React from "react";

const Icon = ({ source, size = 25, margin }) => {
  const iconStyles = {
    height: size,
    width: size,
    margin: margin != null ? margin : 5,
  };

  return <Image source={source} style={iconStyles} />;
};

export default Icon;
