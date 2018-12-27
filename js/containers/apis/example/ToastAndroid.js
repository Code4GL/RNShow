/*
 * @Author: Code4GL
 * @Date: 2018-12-27 16:22:25
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 16:23:38
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, ToastAndroid
} from 'react-native';

export default class ToastAndroidScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={
          () => {
            ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
            ToastAndroid.showWithGravity(
              'All Your Base Are Belong To Us',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            ToastAndroid.showWithGravityAndOffset(
              'A wild toast appeared!',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
          }
        }
        >
ToastAndroid

        </Text>
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
