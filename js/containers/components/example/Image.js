/*
 * @Author: Code4GL
 * @Date: 2018-12-21 15:13:40
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 15:24:41
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const image = require('../../../image/userImage.jpeg');

export default class ImageScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={image}
        />
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
