import {
  DARK_TEXT,
  GREY_TEXT,
  LIST_CELL_BG_COLOR,
  SHADOW_COLOR,
} from '../utils/theme';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text, 
  Image,
  TouchableOpacity 
} from 'react-native';
import PTag from './PTag';

class PListCell extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // might not need state
  }

  onPress() {
    console.log(new Error('onPress not overriden'));
  }

  renderDetailsForType() {
    if (this.props.type === 'transaction') {
      return (
        <View style={styles.details}>
          <Text style={styles.title}>Whole Foods</Text>
          <Text style={styles.subtitle}>San Jose, CA • Yesterday</Text>
          <Text style={styles.amountSpent}>$33.75 Spent</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.details}>
          <Text style={styles.title}>Whole Foods</Text>
          <View style={styles.tagContainer}>
            <PTag>Food</PTag>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
        />
        { this.renderDetailsForType() }
        <View style={styles.moreDetails}>
          <Text style={styles.amountSpent} />
          <Image style={styles.chevron} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: LIST_CELL_BG_COLOR,
    borderRadius: 16,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.2,
    shadowRadius: 30
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  icon: {
    height: 53,
    width: 53,
    backgroundColor: GREY_TEXT,
    borderRadius: 13,
    marginRight: 14
  },
  moreDetails: {
    //
  },
  title: {
    color: DARK_TEXT,
    fontFamily: 'CircularStd-Black',
    fontSize: 17
  },
  subtitle: {
    color: GREY_TEXT,
    fontFamily: 'CircularStd-Bold',
    fontSize: 9
  },
  amountSpent: {
    color: DARK_TEXT,
    fontFamily: 'CircularStd-Black',
    fontSize: 10
  },
  amountContributed: {
    //
  },
  chevron: {
    //
  }
});

module.exports = PListCell;
