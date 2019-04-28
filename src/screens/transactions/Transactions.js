import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import PButton from "../../components/PButton";
import React from "react";

const Transactions = props => {
  return (
    <Container>
      <NavBar navigation={props.navigation} title="Transactions" />
      <PButton
        title="Go to detail"
        onPress={() => props.navigation.navigate("TransactionDetail")}
      />
    </Container>
  );
};

export default Transactions;
