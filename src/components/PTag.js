import {
  DARK_TEXT,
  WHITE
} from '../utils/theme';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Text
} from 'react-native';

class PTag extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 80,
    backgroundColor: DARK_TEXT,
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginRight: 10,
    alignSelf: 'flex-start'
  },
  text: {
    color: WHITE,
    fontFamily: 'CircularStd-Bold',
    fontSize: 8
  }
});

module.exports = PTag;
