/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:30:48
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 21:40:18
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native';

export default class PickerScreen extends Component {
  constructor () {
    super();
    this.state = {
      language: ''
    };
  }

  render () {
    let {language} = this.state;
    return (
      <Picker
        selectedValue={language}
        style={styles.container}
        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 50,
    width: 100
  }
});
