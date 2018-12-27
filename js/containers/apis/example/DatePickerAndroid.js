/*
 * @Author: Code4GL
 * @Date: 2018-12-27 14:03:37
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 14:11:17
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, DatePickerAndroid
} from 'react-native';

export default class DatePickerAndroidScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={
          () => {
            try {
              const {
                action, year, month, day
              } = DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date: new Date(2020, 4, 25)
              });
              if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
              }
            } catch ({code, message}) {
              console.warn('Cannot open date picker', message);
            }
          }
        }
        >
DatePickerAndroid

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
