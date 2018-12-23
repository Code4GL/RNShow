/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:18:28
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:20:23
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableWithoutFeedback
} from 'react-native';

export default class TouchableWithoutFeedbackScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this._onPressButton} style={styles.button}>
          <Text>TouchableOpacity</Text>
        </TouchableWithoutFeedback>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: '#DDDDDD'
  }
});
