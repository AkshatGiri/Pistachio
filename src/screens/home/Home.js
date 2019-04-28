import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import React from "react";
import { createStackNavigator } from "react-navigation";

const Home = props => {
  return (
    <Container>
      <PButton
        title="Go To Contributions"
        onPress={() => props.navigation.navigate("Contributions")}
      />
    </Container>
  );
};

export default Home;
