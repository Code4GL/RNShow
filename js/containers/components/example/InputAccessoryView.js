/*
 * @Author: Code4GL
 * @Date: 2018-12-21 16:39:39
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 17:09:56
 */

'use strict';

import React, { Component } from 'react';
import {
  View, ScrollView, TextInput, Button, StyleSheet, InputAccessoryView
} from 'react-native';

export default class InputAccessoryViewScreen extends Component {

  constructor (props) {
    super(props);
    this.state = {text: 'Placeholder Text'};
  }

  render () {
    const inputAccessoryViewID = 'uniqueID';
    let {text} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardDismissMode="interactive">
          <TextInput
            style={{
              backgroundColor: 'white',
              padding: 10,
              marginTop: 50
            }}
            inputAccessoryViewID={inputAccessoryViewID}
            onChangeText={text => this.setState({text})}
            value={text}
          />
        </ScrollView>
        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button
            onPress={() => this.setState({text: 'Placeholder Text'})}
            title="Reset Text"
          />
        </InputAccessoryView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
