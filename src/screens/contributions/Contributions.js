import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import React from "react";
import { StyleSheet, View } from "react-native";

const Contributions = () => {
  return (
    <Container>

      <PText color="accent" size="xs">Your</PText>
			<PText color="accent" bold size="xs">Top 3</PText>
			<PText color="accent" size="xs">Charities</PText>
    </Container>
  );
};

export default Contributions;
