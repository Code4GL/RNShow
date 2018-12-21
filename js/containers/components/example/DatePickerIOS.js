/*
 * @Author: Code4GL
 * @Date: 2018-12-19 15:32:20
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 14:19:18
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, DatePickerIOS} from 'react-native';

export default class DatePickerIOSScreen extends Component {

  constructor (props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate (newDate) {
    this.setState({chosenDate: newDate});
  }

  render () {
    let {chosenDate} = this.state;
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={chosenDate}
          onDateChange={this.setDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  }
});
