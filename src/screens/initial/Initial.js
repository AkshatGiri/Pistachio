import { logo, onboardingGirlImage } from "../../assets/images";

import Container from "../../components/Container";
import { Image } from "react-native";
import Margin from "../../components/Margin";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import React from "react";
import { View } from "react-native";

const Initial = ({ navigation }) => {
  return (
    <Container style={{ alignItems: "center", justifyContent: "center" }}>
      <Image source={logo} />
      <Margin />
      <View style={{ alignItems: "center" }}>
        <PText style={{ fontSize: 27 }}>The new way to</PText>
        <PText style={{ fontSize: 27 }}>give back</PText>
      </View>
      <Margin />

      <Image source={onboardingGirlImage} />
      <Margin />

      <PButton
        title="Get Started   >"
        onPress={() => navigation.navigate("Home")}
        buttonStyle={{ width: "50%" }}
        bold
      />
    </Container>
  );
};

export default Initial;
