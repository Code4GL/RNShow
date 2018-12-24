/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:54:08
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-24 10:24:58
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class TextInputScreen extends Component {

  constructor (props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render () {
    let {text} = this.state;
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => this.setState({text})}
        value={text}
      />
    );
  }
}
