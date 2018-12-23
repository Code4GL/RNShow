/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:02:30
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 22:04:05
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, SafeAreaView
} from 'react-native';

export default class SafeAreaViewScreen extends Component {

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
