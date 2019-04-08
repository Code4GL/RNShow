/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:06
 * @Last Modified by: Code4GL
 * @Last Modified time: 2019-04-08 16:14:22
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

const image = require('./../../image/tabs/box.png');
const imageSelected = require('./../../image/tabs/box-selected.png');

export default class Index extends Component {

  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Image style={styles.tabBarIcon} source={focused ? imageSelected : image} />
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>Third party</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  tabBarIcon: {
    height: 20,
    width: 20
  }
});
