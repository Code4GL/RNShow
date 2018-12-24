/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:23:59
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-24 10:10:34
 */

'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, SegmentedControlIOS } from 'react-native';

export default class SegmentedControlIOSScreen extends Component {

  constructor () {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  render () {
    let {selectedIndex} = this.state;
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={['One', 'Two']}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
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
