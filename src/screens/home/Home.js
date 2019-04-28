import { SafeAreaView, ScrollView, View } from "react-native";

import Container from "../../components/Container";
import { Image } from "react-native";
import { LIGHT_GREY } from "../../utils/theme";
import Margin from "../../components/Margin";
import PButton from "../../components/PButton";
import PListCell from "../../components/PListCell";
import PText from "../../components/PText";
import PTextButton from "../../components/PTextButton";
import React from "react";
import Row from "../../components/Row";
import Store from "../../undux/store";
import * as Images from "../../assets/images";


const Home = props => {
  let store = Store.useStore();
  console.log(store.get("contributions"));
  return (
    <Container style={{ alignItems: "center" }}>
      <SafeAreaView>
        <Image source={Images.logo} style={{ height: 33 }} resizeMode="contain" />
      </SafeAreaView>
      <Margin margin={10} />
      <PText color="accent" size="xl" bold style={{ fontSize: 70 }}>
        $23.17
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
          <PTextButton
            onPress={() => props.navigation.navigate("Transactions")}
            title="See all >"
            fontSize={13}
            bold
            color={LIGHT_GREY}
          >
            See all >
          </PTextButton>
        </Row>
        <Margin margin={15} />

        <PListCell image={Images.wholefoods} price="0.99" navigation={props.navigation} title="Whole Foods" type="transaction" />
        <PListCell image={Images.starbucks} price="0.45" navigation={props.navigation} title="Starbucks" type="transaction" />

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
          <PTextButton
            title="See all >"
            fontSize={13}
            bold
            color={LIGHT_GREY}
            onPress={() => props.navigation.navigate("Contributions")}
          >
            See all >
          </PTextButton>
        </Row>
        <Margin margin={15} />

        <PListCell image={Images.cityTeam} price="0.10" navigation={props.navigation} title="City Team" type="contribution" />
        <PListCell image={Images.salvationarmy} price="0.67" navigation={props.navigation} title="Salvation Army" type="contribution" />
      </ScrollView>
    </Container>
  );
};

export default Home;
