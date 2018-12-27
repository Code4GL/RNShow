/*
 * @Author: Code4GL
 * @Date: 2018-12-27 10:45:14
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:48:59
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AlertIOS
} from 'react-native';

export default class AlertIOSScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text onPress={() => {
          AlertIOS.alert(
            'Sync Complete',
            'All your data are belong to us.'
          );
        }
        }
        >
AlertIOS
        </Text>
        <Text
          style={{marginTop: 20}}
          onPress={() => {
            AlertIOS.prompt(
              'Enter a value',
              null,
              text => console.log(`You entered ${text}`)
            );
          }
          }
        >
AlertIOS Use prompt
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
