/*
 * @Author: Code4GL
 * @Date: 2018-12-19 15:33:45
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 15:05:23
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';

export default class FlatListScreen extends Component {

  render () {
    return (
      <FlatList
        style={styles.container}
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
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
