/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:35:40
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 22:36:31
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

export default class StatusBarScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
