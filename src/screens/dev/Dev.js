import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
import PBackground from '../../components/PBackground';
import PListSection from '../../components/PListSection';
import PListCell from '../../components/PListCell';

import React from "react";
import { createStackNavigator } from "react-navigation";

const Dev = () => {
  return (
    <Container>
      <PText size="xs">Example Text</PText>
      <PText size="s">Example Text</PText>
      <PText size="m">Example Text</PText>
      <PText size="l">Example Text</PText>
      <PText size="xl">Example Text</PText>
      <PText bold>Bold</PText>
      <PText italic>italic</PText>
      <PText color="grey">Greyed</PText>
      <PBackground>
        <PListSection>
          <PListCell type={'transaction'} />
        </PListSection>
      </PBackground>
      <PButton title="PButton" />
    </Container>
  );
};

const DevNavigator = createStackNavigator({
  Dev: {
    screen: Dev,
    navigationOptions: {
      title: "Dev",
    },
  },
});

export default DevNavigator;
