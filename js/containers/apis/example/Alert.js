/*
 * @Author: Code4GL
 * @Date: 2018-12-27 10:39:17
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:43:16
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Alert
} from 'react-native';

export default class AlertScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')}
            ],
            { cancelable: false }
          );
        }
        }
        >
Alert
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
