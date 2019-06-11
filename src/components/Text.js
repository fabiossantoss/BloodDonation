import React from 'react';

import { Text, StyleSheet } from 'react-native';

import * as theme from '../theme';

export default class Typography extends React.PureComponent {
  render() {
    const { style, children, ...props } = this.props;
    const textStyle = [styles.text, style];
    return <Text style={textStyle}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
});
