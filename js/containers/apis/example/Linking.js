/*
 * @Author: Code4GL
 * @Date: 2018-12-27 15:07:02
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:13:24
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Linking
} from 'react-native';

export default class LinkingScreen extends Component {

  componentDidMount () {
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log(`Initial url is: ${url}`);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Linking</Text>
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
