/*
 * @Author: Code4GL
 * @Date: 2018-12-21 17:30:39
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 17:36:52
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, Text, ListView
} from 'react-native';

export default class ListViewScreen extends Component {

  constructor () {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }

  render () {
    let {dataSource} = this.state;
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={rowData => <Text>{rowData}</Text>}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
