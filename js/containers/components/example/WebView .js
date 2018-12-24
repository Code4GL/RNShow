/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:31:22
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-24 10:25:04
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, WebView } from 'react-native';

export default class WebViewScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: 'https://www.baidu.com'}}
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
