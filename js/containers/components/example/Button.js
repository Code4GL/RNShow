/*
 * @Author: Code4GL
 * @Date: 2018-12-18 17:18:17
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 14:11:52
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, View, Button, Alert
} from 'react-native';

export default class ButtonScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            Alert.alert('onPressLearnMore');
          }}
          title="Learn More"
          color="rgba(50,160,248,1)"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center'
  }
});
