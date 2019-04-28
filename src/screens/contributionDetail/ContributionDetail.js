import { Text, View, StyleSheet } from "react-native";

import Container from "../../components/Container";
import PText from "../../components/PText";
import PTag from "../../components/PTag";
import {
  DARK_TEXT,
  TABLET_BG_COLOR
} from "../../utils/theme";

import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Home = props => {
  return (
    <Container style={{ alignItems: "center" }}>
      <View style={styles.containerDetail}>
        <View style={styles.charityIcon}></View>
        <View>
          <PText bold size="ml">Unicef</PText>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <PText bold color="accent" size="sm">$0.75</PText>
            <PText bold color="accent" size="xs"> Contributed</PText>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <PTag color={DARK_TEXT} bg={TABLET_BG_COLOR}>Water Supplies</PTag>
            <PTag color={DARK_TEXT} bg={TABLET_BG_COLOR}>Food</PTag>
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <PText bold size="xs" color="light">
          {
            "UNICEF began its mission in 1946 as a relief organization for children after World War II.  Its mandate soon expanded to helping children whose lives were at risk in developing countries. Almost 60 years later, UNICEF is more than 7,000 people in 157 countries and territories around the world."
          }
        </PText>
      </View>
      <View style={styles.items}>
        <PText bold size="s" color="light">Items Bought</PText>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
            <View style={styles.item}></View>
          </View>
        </ScrollView>
      </View>


    </Container>
  );
};

const styles = StyleSheet.create({
  containerDetail: {
    flexDirection: 'row',
    width: '100%',
    padding: 20
  },
  charityIcon: {
    width: 78,
    height: 78,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 5
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    padding: 10
  },
  items: {
    width: '100%',
    padding: 20,
    flex: 1
  },
  item: {
    width: 155,
    height: 155,
    borderRadius: 25,
    backgroundColor: 'white',
    marginVertical: 10
  }
});

export default Home;