/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:27:09
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:28:06
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default class VirtualizedListScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>VirtualizedList</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
