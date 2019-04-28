import Icon from "./Icon";
import React from "react";
import { TouchableOpacity } from "react-native";

const TouchableIcon = ({ source, size, onPress, margin, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Icon source={source} size={size} margin={margin} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
