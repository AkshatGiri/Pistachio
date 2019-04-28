import PlaidAuthenticator from "react-native-plaid-link";
import React from "react";
import { SafeAreaView } from "react-native";

const Plaid = props => {
  return (
    <PlaidAuthenticator
      publicKey="e79d5c405e3563d11373272d16f5e8"
      onMessage={data => {
        console.log(data);
        if (data.eventName === "HANDOFF") {
          props.navigation.navigate("Home");
        }
      }}
      env="sandbox"
      product="auth,transactions"
      clientName="Pistachio"
      selectAccount={false}
      onLoadEnd={() => console.log("end")}
    />
  );
};
export default Plaid;
