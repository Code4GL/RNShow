/*
 * @Author: Code4GL
 * @Date: 2018-12-27 15:28:18
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:32:12
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, PermissionsAndroid, Alert
} from 'react-native';

export default class PermissionsAndroidScreen extends Component {

  async requestCameraPermission () {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          'title': 'Cool Photo App Camera Permission',
          'message': 'Cool Photo App needs access to your camera ' +
                         'so you can take awesome pictures.'
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('You can use the camera');
      } else {
        Alert.alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={() => { this.requestCameraPermission; }}>PermissionsAndroid</Text>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
