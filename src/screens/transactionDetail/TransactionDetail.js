import Container from "../../components/Container";
import CreditCard from "../../components/CreditCard";
import Margin from "../../components/Margin";
import NavBar from "../../components/NavBar";
import PButton from "../../components/PButton";
import PListCell from "../../components/PListCell";
import PText from "../../components/PText";
import React from "react";
import Row from "../../components/Row";
import { View } from "react-native";
import { WHITE } from "../../utils/theme";
const TransactionDetail = props => {
  return (
    <Container style={{ padding: 10 }}>
      <NavBar navigation={props.navigation} title="Transaction Detail" />
      <CreditCard />
      <PButton
        title="Manage Card  >"
        bold
        buttonStyle={{
          width: "50%",
          alignSelf: "center",
          backgroundColor: "#683fd2",
          shadowColor: "#683fd2",
        }}
        titleStyle={{ color: WHITE }}
        textSize="s"
      />
      <PText bold>Transaction</PText>
      <Margin margin={10} />
      <PListCell type="transaction" />
      <PText bold>Contribution</PText>
      <Margin margin={10} />
      <PListCell type="contribution" />
    </Container>
  );
};

export default TransactionDetail;
