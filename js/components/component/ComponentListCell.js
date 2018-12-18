/*
 * @Author: Code4GL
 * @Date: 2018-12-17 19:39:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 14:41:43
 */

'use strict';

import React, {Component} from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class ComponentListCell extends Component {

  constructor (props) {
    super(props);
    this.state = {
      viewDescription: false
    };
  }

  render () {
    let {viewDescription} = this.state;
    let {data} = this.props;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => { this.setState({viewDescription: !viewDescription}); }}>
            <Text>{data.key}</Text>
            <Text>{data.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>更多</Text>
          </TouchableOpacity>
        </View>
        {viewDescription
          ? (
            <View>
              <Text>{data.description}</Text>
              <Text>{data.descriptionCN}</Text>
            </View>
          )
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
