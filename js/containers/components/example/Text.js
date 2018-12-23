/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:50:32
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 22:51:00
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>
          <Text>First part and </Text>
          <Text>second part</Text>
        </Text>
        <View>
          <Text>First part and </Text>
          <Text>second part</Text>
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
