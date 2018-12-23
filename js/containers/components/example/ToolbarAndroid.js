/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:57:40
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:03:47
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, ToolbarAndroid } from 'react-native';

const image = require('./../../../image/userImage.jpeg');

export default class ToolbarAndroidScreen extends Component {

  onActionSelected (position) {
    if (position === 0) { // index of 'Settings'
    //   showSettings();
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          logo={image}
          title="AwesomeApp"
          actions={[{title: 'Settings', icon: image, show: 'always'}]}
          onActionSelected={this.onActionSelected}
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
