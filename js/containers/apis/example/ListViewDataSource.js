/*
 * @Author: Code4GL
 * @Date: 2018-12-27 15:16:18
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:18:08
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, ListView
} from 'react-native';

export default class ListViewDataSourceScreen extends Component {

  getInitialState () {
    var ds = new ListView.DataSource({rowHasChanged: this._rowHasChanged});
    return {ds};
  }

  _onDataArrived (newData) {
    let {ds} = this.state;
    this._data = this._data.concat(newData);
    this.setState({
      ds: ds.cloneWithRows(this._data)
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>ListViewDataSource</Text>
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
