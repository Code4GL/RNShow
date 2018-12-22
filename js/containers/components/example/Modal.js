/*
 * @Author: Code4GL
 * @Date: 2018-12-22 14:52:13
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-22 14:55:40
 */

'use strict';

import React, {Component} from 'react';
import {
  Modal, Text, TouchableHighlight, View, Alert
} from 'react-native';

export default class ModalScreen extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible (visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    let {modalVisible} = this.state;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
