/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:21:55
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:22:34
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ViewScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20
          }}
        >
          <View style={{backgroundColor: 'blue', flex: 0.3}} />
          <View style={{backgroundColor: 'red', flex: 0.5}} />
          <Text>Hello World!</Text>
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
