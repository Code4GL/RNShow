/*
 * @Author: Code4GL
 * @Date: 2018-12-27 11:11:22
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 11:18:11
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default class AppRegistryScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>AppRegistry</Text>
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
