/*
 * @Author: Code4GL
 * @Date: 2018-12-19 15:33:31
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 15:34:30
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DrawerLayoutAndroid extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>DrawerLayoutAndroid</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
