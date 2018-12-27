/*
 * @Author: Code4GL
 * @Date: 2018-12-27 16:28:25
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 16:30:49
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Vibration
} from 'react-native';

export default class VibrationScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={
          () => {
            const DURATION = 10000;
            const PATTERN = [1000, 2000, 3000];

            Vibration.vibrate(DURATION);
            // Android: vibrate for 10s
            // iOS: duration is not configurable, vibrate for fixed time (about 500ms)

            Vibration.vibrate(PATTERN);
            // Android: wait 1s -> vibrate 2s -> wait 3s
            // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate

            Vibration.vibrate(PATTERN, true);
            // Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...
            // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate ->
            //      wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...

            Vibration.cancel();
            // Android: vibration stopped
            // iOS: vibration stopped
          }
        }
        >
Vibration
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
