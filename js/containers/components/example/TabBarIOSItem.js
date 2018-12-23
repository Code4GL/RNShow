/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:46:34
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 22:47:09
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TabBarIOSItemScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>TabBarIOS.Item</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
