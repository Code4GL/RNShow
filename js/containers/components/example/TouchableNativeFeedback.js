/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:13:20
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:13:49
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableNativeFeedback
} from 'react-native';

export default class TouchableNativeFeedbackScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
            <Text style={{margin: 30}}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
