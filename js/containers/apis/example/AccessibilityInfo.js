/*
 * @Author: Code4GL
 * @Date: 2018-12-27 10:16:19
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:23:09
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, View, Text, AccessibilityInfo
} from 'react-native';

export default class AccessibilityInfoScreen extends Component {
    state = {
      screenReaderEnabled: false
    };

    componentDidMount () {
      AccessibilityInfo.addEventListener(
        'change',
        this._handleScreenReaderToggled,
      );
      AccessibilityInfo.fetch().then((isEnabled) => {
        this.setState({
          screenReaderEnabled: isEnabled
        });
      });
    }

    componentWillUnmount () {
      AccessibilityInfo.removeEventListener(
        'change',
        this._handleScreenReaderToggled,
      );
    }

    _handleScreenReaderToggled = (isEnabled) => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    };

    render () {
      let {screenReaderEnabled} = this.state;
      return (
        <View style={styles.container}>
          <Text>
            The screen reader is
            {screenReaderEnabled ? 'enabled' : 'disabled'}
.
          </Text>
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
