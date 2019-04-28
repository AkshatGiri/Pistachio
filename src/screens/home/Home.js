import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import React from "react";
import { createStackNavigator } from "react-navigation";

const Home = props => {
  return (
    <Container>
      <PText>Test</PText>
      <PText>Test</PText>
      <PText>Test</PText>
      <PText>Test</PText>
      <PButton
        title="Go To Dev"
        onPress={() => props.navigation.navigate("DevScreen")}
      />
    </Container>
  );
};

export default Home;
