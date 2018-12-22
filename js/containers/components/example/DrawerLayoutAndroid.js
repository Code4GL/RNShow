/*
 * @Author: Code4GL
 * @Date: 2018-12-19 15:33:31
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 15:34:30
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, Text,DrawerLayoutAndroid} from 'react-native';

export default class DrawerLayoutAndroidScreen extends Component {

  render () {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Plesae swipe right！</Text>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>请向右滑动！</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
