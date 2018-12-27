/*
 * @Author: Code4GL
 * @Date: 2018-12-27 11:21:58
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 13:41:39
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AsyncStorage, Alert
} from 'react-native';

export default class AsyncStorageScreen extends Component {

    _storeData = async () => {
      try {
        await AsyncStorage.setItem('TASKS', 'I like to save it.');
        Alert.alert('save successful');
      } catch (error) {
        // Error saving data
      }
    }

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('TASKS');
        if (value !== null) {
        // We have data!!
          Alert.alert(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    }

    render () {
      return (
        <View style={styles.container}>
          <Text onPress={
            this._storeData
          }
          >
storeData
          </Text>
          <Text
            style={{marginTop: 20}}
            onPress={
              this._retrieveData
            }
          >
retrieveData
          </Text>
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
