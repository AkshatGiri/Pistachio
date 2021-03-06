// import { DARK_TEXT, TABLET_BG_COLOR } from "../../utils/theme";
import { StyleSheet, Text, View, Image } from "react-native";

import React from "react";
import PText from "../../components/PText";
import PTag from "../../components/PTag";

const Item = props => {
  return (
    <View style={styles.item}>
      <PTag styleText={{fontSize: 15}} style={{position: 'absolute', zIndex: 1, right: 10, top: 15}}>{props.price}</PTag>
      <Image resizeMode="contain" style={styles.image} source={{ uri: props.image }} />
      <View style={styles.textContainer}>
        <PText color="dark" bold size="sx">{props.name}</PText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 155,
    height: 155,
    borderRadius: 25,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'
    //justifyContent: 'space-around'
  },
  textContainer: {
    alignSelf: 'flex-start',
    flex: 1,
    marginHorizontal: 5
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 16
    // justifyContent: 'space-between'
    // marginBottom: 30
  }
});

export default Item;
