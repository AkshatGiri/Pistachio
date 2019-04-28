import Container from "../../components/Container";
import PButton from "../../components/PButton";
import PText from "../../components/PText";
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

const x = {
  all_contributions: [
    {
      org_name: "Homeless Shelter",
      org_image: "image url",
      org_description: "Description about the org",
      contribution_amount: 0.75,
      categories: ["Rent", "Food Suplies"],
      money_spent_on: [
        { item_name: "Water Bottles", item_image: "image url" },
        { item_name: "Rent", item_image: "image url" },
      ],
    },
  ],
  top_charities: [
    { org_name: "Unicef", org_image: "image url" },
    { org_name: "Unicef", org_image: "image ulr" },
    { org_name: "Unicef", org_image: "image url" },
  ],
};
