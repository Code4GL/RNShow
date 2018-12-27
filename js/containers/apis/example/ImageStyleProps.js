/*
 * @Author: Code4GL
 * @Date: 2018-12-27 14:30:42
 * @Last Modified by:   Code4GL
 * @Last Modified time: 2018-12-27 14:30:42
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default class ImageStylePropsScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>ImageStyleProps</Text>
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
