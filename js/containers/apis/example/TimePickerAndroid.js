/*
 * @Author: Code4GL
 * @Date: 2018-12-27 16:16:00
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 16:17:56
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TimePickerAndroid
} from 'react-native';

export default class TimePickerAndroidScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={
          () => {
            try {
              const {action, hour, minute} = TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: false // Will display '2 PM'
              });
              if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
              }
            } catch ({code, message}) {
              console.warn('Cannot open time picker', message);
            }
          }
        }
        >
TimePickerAndroid
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
