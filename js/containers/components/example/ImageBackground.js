/*
 * @Author: Code4GL
 * @Date: 2018-12-21 15:40:27
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 15:43:41
 */

'use strict';

import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';

const image = require('../../../image/userImage.jpeg');

export default class ImageBackgroundScreen extends Component {
  render () {
    return (
      <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
        <Text>Inside</Text>
      </ImageBackground>
    );
  }
}

