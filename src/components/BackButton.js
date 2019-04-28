import React from "react";
import TouchableIcon from "./TouchableIcon";
import { leftArrowIcon } from "../assets/icons";

const BackButton = ({ navigation, cross }) => {
  return (
    <TouchableIcon
      source={leftArrowIcon}
      onPress={() => navigation.pop()}
      size={20}
    />
  );
};

export default BackButton;
