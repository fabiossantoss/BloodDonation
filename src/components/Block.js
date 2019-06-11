import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import * as theme from '../theme';

export default class components extends React.PureComponent {
  render() {
    const { children, style, ...props } = this.props;
    const blockStyle = [styles.block, style];

    return (
      <View style={blockStyle} {...props}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});
