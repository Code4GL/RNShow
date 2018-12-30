/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:25:12
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-30 13:41:32
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';

const image = require('./../../image/icon/account.png');
const imageSelected = require('./../../image/icon/account-selected.png');

export default class Index extends Component {

  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Image style={styles.tabBarIcon} source={focused ? imageSelected : image} />
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <Text>About</Text>
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
