/*
 * @Author: Code4GL
 * @Date: 2018-12-21 17:16:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 17:29:05
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, Text, View, KeyboardAvoidingView, TextInput
} from 'react-native';

export default class KeyboardAvoidingViewScreen extends Component {

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
          <TextInput style={{
            backgroundColor: 'white',
            padding: 10,
            marginTop: 10
          }}
          />
          <Text>sssss</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
