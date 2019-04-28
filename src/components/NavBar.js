import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import BackButton from "./BackButton";
import Margin from "./Margin";
import PText from "./PText";
import Row from "./Row";

const NavBar = props => {
  return (
    <SafeAreaView style={styles.cartContainer}>
      <Row style={{ justifyContent: "space-between" }}>
        <View style={{ flex: 1 }}>
          <BackButton navigation={props.navigation} cross />
        </View>
        <View
          style={{
            flex: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PText>{props.title}</PText>
        </View>
        <View style={{ flex: 1 }} />
      </Row>
      <Margin margin={16} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default NavBar;
