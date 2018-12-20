/*
 * @Author: Code4GL
 * @Date: 2018-12-19 17:46:15
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 18:11:19
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

export default class Detail extends Component {

  render () {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>{navigation.state.params.detail.name}</Text>
        <Text>Detail</Text>
        <Text>english</Text>
        <Text>中文</Text>
        <TouchableOpacity><Text>{navigation.state.params.detail.name}</Text></TouchableOpacity>
        <Text>propsList</Text>
        <Text>methodsList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
