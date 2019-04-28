import {
  LIGHT_BG_GRAD_TOP,
  LIGHT_BG_GRAD_BOT
} from '../utils/theme';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

class PBackground extends Component {
  render() {
    return (
      <LinearGradient {...this.props} colors={[LIGHT_BG_GRAD_TOP, LIGHT_BG_GRAD_BOT]}>
        {this.props.children}
      </LinearGradient>
    );
  }
}

module.exports = PBackground;
