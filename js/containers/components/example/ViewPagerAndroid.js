/*
 * @Author: Code4GL
 * @Date: 2018-12-23 23:24:42
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:25:28
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, ViewPagerAndroid
} from 'react-native';

export default class ViewPagerAndroidScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
        >
          <View style={styles.pageStyle} key="1">
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20
  }
});
