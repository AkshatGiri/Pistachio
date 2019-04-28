import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import Container from "../../components/Container";
import Margin from "../../components/Margin";
import NavBar from "../../components/NavBar";
import PBackground from "../../components/PBackground";
import PButton from "../../components/PButton";
import PListCell from "../../components/PListCell";
import PListSection from "../../components/PListSection";
import PText from "../../components/PText";
import React from "react";
import Row from "../../components/Row";
import * as Images from "../../assets/images";

const Contributions = props => {
  return (
    <Container>
      <NavBar navigation={props.navigation} title="Contributions" />
      <View style={styles.header}>
        <PText color="accent" size="s">
          Your
        </PText>
        <PText color="accent" bold size="s">
          {" "}
          Top 3{" "}
        </PText>
        <PText color="accent" size="s">
          Charities
        </PText>
      </View>
      <Margin margin={10} />
      <View style={styles.header}>

        <View style={styles.charityIconContainer}>
          <View style={styles.charityIcon}>

            <View style={styles.tablet}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>$30.78</Text>
            </View>
            <Image resizeMode="contain" style={styles.imageCharity} source={Images.americares} />
          </View>
          <PText bold size="xs">
            Americares
          </PText>
        </View>

        <View style={styles.charityIconContainer}>
          <View style={styles.charityIcon}>

            <View style={styles.tablet}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>$12.34</Text>
            </View>
            <Image resizeMode="contain" style={styles.imageCharity} source={Images.lifemoves} />
          </View>
          <PText bold size="xs">
            Life Moves
          </PText>
        </View>

        <View style={styles.charityIconContainer}>
          <View style={styles.charityIcon}>

            <View style={styles.tablet}>
              <Text style={{ fontSize: 10, fontWeight: "bold" }}>$1.02</Text>
            </View>
            <Image resizeMode="contain" style={styles.imageCharity} source={Images.cityTeam} />
          </View>
          <PText bold size="xs">
            City Team
          </PText>
        </View>

      </View>
      <ScrollView
        style={{
          flex: 1,
          marginTop: 10,
          width: "100%",
          backgroundColor: "white",
          padding: 10,
        }}
      >
        {/* RECENT CONTRIBUTIONS */}
        <Row
          style={{
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <PText color="dark" bold>
            Contribution History
          </PText>
          <PText size="xs" bold color="grey">
            See all >
          </PText>
        </Row>
        <Margin margin={15} />
        <PListCell price="0.04" title="Life Moves" image={Images.lifemoves} type="contribution" navigation={props.navigation} />
        <PListCell price="0.14" title="City Team" image={Images.cityTeam}  type="contribution" navigation={props.navigation} />
        <PListCell price="0.76"title="Habitat for Humanity" image={Images.habitat} type="contribution" navigation={props.navigation} />
        <PListCell price="0.88" title="Feeding America" image={Images.FeedingAmerica} type="contribution" navigation={props.navigation} />
        <PListCell price="0.11" title="City Team" image={Images.cityTeam}  type="contribution" navigation={props.navigation} />
        <PListCell price="0.53" title="Americares" image={Images.americares}  type="contribution" navigation={props.navigation} />
        <PListCell price="0.22" title="Feeding America" image={Images.FeedingAmerica}  type="contribution" navigation={props.navigation} />
        <PListCell price="0.78" title="Habitat for Humanity" image={Images.habitat}  type="contribution" navigation={props.navigation} />
        <PListCell price="0.06" title="American Red Cross" image={Images.redcross} type="contribution" navigation={props.navigation} />
        <PListCell price="0.21" title="Unicef" image={Images.unicef} type="contribution" navigation={props.navigation} />

        <PListCell price="0.02" title="Salvation Army" image={Images.salvationarmy}  type="contribution" navigation={props.navigation} />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10
  },
  charityIconContainer: {
    alignItems: "center",
    marginHorizontal: 12,
    width: 70,
  },
  charityIcon: {
    width: 70,
    height: 70,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tablet: {
    position: "absolute",
    top: 5,
    left: 40,
    height: 18,
    backgroundColor: "#1DFFE4",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 4,
    zIndex: 2
  },
  imageCharity: {
    height: 40,
    width: 40
  }
});

export default Contributions;
