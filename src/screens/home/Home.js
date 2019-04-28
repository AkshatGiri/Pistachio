import { SafeAreaView, ScrollView, View } from "react-native";

import Container from "../../components/Container";
import { Image } from "react-native";
import Margin from "../../components/Margin";
import PButton from "../../components/PButton";
import PListCell from "../../components/PListCell";
import PText from "../../components/PText";
import React from "react";
import Row from "../../components/Row";
import { logo } from "../../assets/images";

const Home = props => {
  return (
    <Container style={{ alignItems: "center" }}>
      <SafeAreaView>
        <Image source={logo} style={{ height: 33 }} resizeMode="contain" />
      </SafeAreaView>
      <Margin margin={10} />
      <PText color="accent" size="xl" bold style={{ fontSize: 70 }}>
        $3,000
      </PText>
      <PText bold size="s">
        Donated to 5 charities
      </PText>
      <Margin margin={20} />
      <PButton
        bold
        title="Contributions   >"
        onPress={() => props.navigation.navigate("Contributions")}
        buttonStyle={{ width: "50%" }}
      />
      <Margin margin={10} />
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "white",
          padding: 10,
        }}
      >
        {/* RECENT TRANSACTIONS */}
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <PText color="dark" bold>
            Recent Transactions
          </PText>
          <PText size="xs" bold color="grey">
            See all >
          </PText>
        </Row>
        <PListCell />
        <PListCell />
        <PListCell />
        <PListCell />
        {/* RECENT CONTRIBUTIONS */}
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <PText color="dark" bold>
            Recent Contributions
          </PText>
          <PText size="xs" bold color="grey">
            See all >
          </PText>
        </Row>
      </ScrollView>
    </Container>
  );
};

export default Home;
