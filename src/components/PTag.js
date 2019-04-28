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
      <View style={{...styles.container, ...this.props.style, backgroundColor: this.props.bg || DARK_TEXT}}>
        <Text style={{...styles.text, ...this.props.styleText, color: this.props.color || WHITE}}>{this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 80,
    // backgroundColor: bg,
    paddingVertical: 4,
    paddingHorizontal: 7,
    marginRight: 5,
    alignSelf: 'flex-start'
  },
  text: {
    // color,
    fontFamily: 'CircularStd-Bold',
    fontSize: 8
  }
});

module.exports = PTag;
