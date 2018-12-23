/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:09:29
 * @Last Modified by:   Code4GL
 * @Last Modified time: 2018-12-23 22:09:29
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ScrollViewScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>ScrollView</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
