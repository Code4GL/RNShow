/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:20:37
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-24 10:05:31
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

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  _onForward = () => {
    let {navigator} = this.props;
    navigator.push({
      title: 'Scene'
    });
  }

  render () {
    let {title} = this.props;
    return (
      <View>
        <Text>
          Current Scene:
          {' '}
          { title }
        </Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
