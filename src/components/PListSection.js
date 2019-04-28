import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

class PListSection extends Component {
  // TODO: add title & show all to this component
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.children}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  }
});

module.exports = PListSection;
