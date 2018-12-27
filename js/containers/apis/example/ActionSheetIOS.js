/*
 * @Author: Code4GL
 * @Date: 2018-12-27 10:33:21
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:34:32
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ActionSheetIOSScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>ActionSheetIOS</Text>
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
