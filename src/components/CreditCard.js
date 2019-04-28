import LinearGradient from "react-native-linear-gradient";
import Margin from "./Margin";
import PText from "./PText";
import React from "react";
import Row from "./Row";
import { View } from "react-native";

const CreditCard = () => {
  return (
    <LinearGradient
      style={{
        width: "80%",
        padding: 20,
        backgroundColor: "purple",
        borderRadius: 10,
        alignSelf: "center",
      }}
      colors={["#ba63e5", "#5835cb"]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <PText italic bold>
        Visa
      </PText>
      <Margin margin={20} />
      <PText size="s">**** **** **** 1234</PText>
      <Margin margin={20} />

      <Row>
        <PText size="xs" style={{ flex: 1 }}>
          Card Holder
        </PText>
        <PText size="xs">Expires</PText>
      </Row>
      <Row>
        <PText size="s" style={{ flex: 1 }}>
          Akshat Giri
        </PText>
        <PText size="s">04/24</PText>
      </Row>
    </LinearGradient>
  );
};

export default CreditCard;
