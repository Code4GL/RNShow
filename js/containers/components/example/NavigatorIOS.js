/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:20:37
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 21:30:03
 */

'use strict';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  NavigatorIOS, Text, TouchableHighlight, View
} from 'react-native';

export default class NavigatorIOSScreen extends Component {
  render () {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene'
        }}
        style={{flex: 1}}
      />
    );
  }
}
