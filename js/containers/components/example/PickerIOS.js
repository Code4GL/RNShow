/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:42:18
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 21:43:48
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PickerIOSScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>PickerIOS</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
