/*
 * @Author: Code4GL
 * @Date: 2018-12-27 16:07:13
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 16:08:51
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';

export default class StyleSheetScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>StyleSheet</Text>
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
