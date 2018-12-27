/*
 * @Author: Code4GL
 * @Date: 2018-12-27 13:50:28
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 13:52:37
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, BackHandler
} from 'react-native';

export default class BackHandlerScreen extends Component {

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

    handleBackPress = () => {
      this.goBack(); // works best when the goBack is async
      return true;
    }

    render () {
      return (
        <View style={styles.container}>
          <Text>BackHandler</Text>
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
