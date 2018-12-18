/*
 * @Author: Code4GL
 * @Date: 2018-12-18 17:18:17
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 18:15:33
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ActivityIndicator extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>ActivityIndicator</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
