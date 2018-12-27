/*
 * @Author: Code4GL
 * @Date: 2018-12-27 15:35:06
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:41:28
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, PixelRatio
} from 'react-native';

export default class PixelRatioScreen extends Component {

  render () {
    var image = {
      width: PixelRatio.getPixelSizeForLayoutSize(200),
      height: PixelRatio.getPixelSizeForLayoutSize(100)
    };
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor: 'green', width: image.width, height: image.height}}>PixelRatio</Text>
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
