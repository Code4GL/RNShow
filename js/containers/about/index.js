/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:25:12
 * @Last Modified by: Code4GL
 * @Last Modified time: 2019-04-08 17:15:10
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';
import ItemCell from '../../components/common/itemCell';

const image = require('./../../image/tabs/account.png');
const imageSelected = require('./../../image/tabs/account-selected.png');
const rnLogo = require('./../../image/rnLogo.png');
const userImage = require('./../../image/userImage.jpeg');

export default class Index extends Component {

  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Image style={styles.tabBarIcon} source={focused ? imageSelected : image} />
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.rnLogoCell}>
          <Image source={rnLogo} style={styles.rnLogo} />
        </View>
        <View style={styles.versionTextCell}>
          <Text style={styles.versionText}>1.0.0</Text>
        </View>
        <ItemCell title="组件列表" content="1" icon={userImage} />
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
  },
  rnLogoCell: {
    height: 100,
    justifyContent: 'center'
  },
  rnLogo: {
    height: 70,
    width: 70,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  versionTextCell: {
    height: 40,
    justifyContent: 'center'
  },
  versionText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
