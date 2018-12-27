/*
 * @Author: Code4GL
 * @Date: 2018-12-27 15:04:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:04:59
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default class LayoutAnimationScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>LayoutAnimation</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
