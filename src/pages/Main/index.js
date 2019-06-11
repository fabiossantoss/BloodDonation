import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Block, Text } from '../../components';

const Main = () => {
  console.log('teste');
  return (
    <Block style={styles.container}>
      <Text>IBlood </Text>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    margin: 40,
  },
});
export default Main;
