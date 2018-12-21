/*
 * @Author: Code4GL
 * @Date: 2018-12-18 17:18:17
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 14:11:27
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default class ActivityIndicatorScreen extends Component {

  render () {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
