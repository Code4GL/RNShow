/*
 * @Author: Code4GL
 * @Date: 2018-12-22 14:51:32
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-22 15:05:19
 */

'use strict';

import React from 'react';
import { MaskedViewIOS, Text, View } from 'react-native';

export default class MyMaskedViewScreen extends React.Component {
  render () {
    return (
      // Determines shape of the mask
      <MaskedViewIOS
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={(
          <View style={{
            backgroundColor: 'transparent', flex: 1, justifyContent: 'center', alignItems: 'center'
          }}
          >
            <Text style={{fontSize: 60, color: 'black', fontWeight: 'bold'}}>Basic Mask</Text>
          </View>
        )}
      >
        { /* Shows behind the mask, you can put anything here, such as an image */ }
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
      </MaskedViewIOS>
    );
  }
}
