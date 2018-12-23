/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:46:10
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 21:47:00
 */

'use strict';

import React, { Component } from 'react';
import {
  ProgressBarAndroid,
  StyleSheet,
  View
} from 'react-native';

export default class ProgressBarAndroidScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10
  }
});
