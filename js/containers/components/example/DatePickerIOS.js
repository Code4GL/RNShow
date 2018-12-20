/*
 * @Author: Code4GL
 * @Date: 2018-12-19 15:32:20
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 15:34:07
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DatePickerIOS extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>DatePickerIOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
