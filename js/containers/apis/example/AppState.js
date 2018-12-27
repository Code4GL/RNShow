/*
 * @Author: Code4GL
 * @Date: 2018-12-27 11:16:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 11:20:13
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet, View, Text, AppState
} from 'react-native';

export default class AppStateScreen extends Component {

    state = {
      appState: AppState.currentState
    }

    componentDidMount () {
      AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount () {
      AppState.removeEventListener('change', this._handleAppStateChange);
    }

      _handleAppStateChange = (nextAppState) => {
        let {appState} = this.state;
        if (appState.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App has come to the foreground!');
        }
        this.setState({appState: nextAppState});
      }

      render () {
        let {appState} = this.state;
        return (
          <View style={styles.container}>
            <Text>
Current state is:
              {' '}
              {appState}
            </Text>
          </View>
        );
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
