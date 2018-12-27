/*
 * @Author: Code4GL
 * @Date: 2018-12-27 14:37:30
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:00:02
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, Text, Keyboard
} from 'react-native';

export default class KeyboardScreen extends Component {

  componentDidMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow () {
    // Alert.alert('Keyboard Shown');
  }

  _keyboardDidHide () {
    // Alert.alert('Keyboard Hidden');
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{backgroundColor: 'white'}}
          placeholder="请输入。。。"
        />
        <Text onPress={() => { Keyboard.dismiss() ; }}>收起键盘</Text>
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
