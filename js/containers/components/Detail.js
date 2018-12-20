/*
 * @Author: Code4GL
 * @Date: 2018-12-19 17:46:15
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-20 15:05:25
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity
} from 'react-native';

export default class Detail extends Component {

  render () {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{navigation.state.params.detail.name}</Text>
        </View>
        {/* 中英文描述 */}
        <View>
          <View>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {navigation.state.params.detail.description}
            </Text>
          </View>
          <View style={styles.translation}>
            <View style={styles.translationTitle}>
              <Text style={styles.translationText}>翻译：</Text>
            </View>
            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {navigation.state.params.detail.descriptionCN}
            </Text>
          </View>
        </View>
        {/* 组件效果展示 */}
        <View>
          <View style={styles.exampleTitle}>
            <Text style={styles.exampleTitleText}>Example</Text>
          </View>
          <TouchableOpacity>
            <Text>{navigation.state.params.detail.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  title: {
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 35,
    padding: 10,
    fontWeight: 'bold',
    color: 'rgba(0,81,102,1)'
  },
  translation: {
    backgroundColor: 'lightgray'
  },
  translationTitle: {
    justifyContent: 'center'
  },
  translationText: {
    color: 'green',
    padding: 5,
    fontWeight: 'bold'
  },
  exampleTitle: {
    justifyContent: 'center'
  },
  exampleTitleText: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    color: 'rgba(0,81,102,1)'
  }
});
