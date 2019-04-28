import React, { Component } from 'react';
import { 
  StyleSheet, 
  View
} from 'react-native';

class PListSection extends Component {
  // TODO: add title & show all to this component
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

module.exports = PListSection;
