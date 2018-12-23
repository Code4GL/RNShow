/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:15:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:16:36
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

export default class PickerIOSScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton} style={styles.button}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
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
