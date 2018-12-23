/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:05:28
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:10:57
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableHighlight, Alert, Text
} from 'react-native';

export default class TouchableHighlightScreen extends Component {

  _onPressButton () {
    Alert.alert('TouchableHighlight');
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} style={styles.button}>
          <Text>TouchableHighlight</Text>
        </TouchableHighlight>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#DDDDDD'
  }
});
