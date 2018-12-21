/*
 * @Author: Code4GL
 * @Date: 2018-12-19 17:46:15
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 16:10:33
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
        {/* 英文描述 */}
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {navigation.state.params.detail.description}
          </Text>
        </View>
        {/* 中文描述 */}
        <View style={styles.descriptionCN}>
          <View style={styles.descriptionCNCell}>
            <View style={styles.translationTitle}>
              <Text style={styles.translationText}>翻译：</Text>
            </View>
            <Text style={styles.descriptionCNText}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {navigation.state.params.detail.descriptionCN}
            </Text>
          </View>
        </View>
        {/* 注意信息展示 */}
        <View style={styles.note}>
          <View style={styles.noteLeft} />
          <View>
            <Text style={styles.noteText}>
              {navigation.state.params.detail.note}
            </Text>
            <Text style={styles.noteText}>
              {navigation.state.params.detail.noteCN}
            </Text>
          </View>
        </View>
        {/* 组件效果展示 */}
        <View>
          <View style={styles.exampleTitle}>
            <Text style={styles.exampleTitleText}>Example</Text>
          </View>
          <View style={styles.showExampleView}>
            <TouchableOpacity
              style={styles.showExample}
              onPress={() => { navigation.navigate(navigation.state.params.detail.route) ; }}
            >
              <Text style={styles.showExampleText}>{navigation.state.params.detail.name}</Text>
            </TouchableOpacity>
          </View>
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
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    color: 'rgba(0,81,102,1)'
  },
  description: {

  },
  descriptionText: {
    padding: 10,
    lineHeight: 20
  },
  descriptionCN: {
    alignItems: 'center'
  },
  descriptionCNCell: {
    width: '97%',
    borderRadius: 5,
    backgroundColor: 'rgba(228,231,236,0.8)'
  },
  descriptionCNText: {
    padding: 5,
    lineHeight: 20
  },
  translationTitle: {
    justifyContent: 'center'
  },
  translationText: {
    color: 'green',
    padding: 5,
    fontWeight: 'bold'
  },
  noteLeft: {
    width: '1%',
    backgroundColor: 'rgba(255,227,121,1)'
  },
  note: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'rgba(248,245,215,1)'
  },
  noteText: {
    padding: 5,
    lineHeight: 20
  },
  exampleTitle: {
    justifyContent: 'center'
  },
  exampleTitleText: {
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
    color: 'rgba(0,81,102,1)'
  },
  showExampleView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  showExample: {
    borderRadius: 10,
    backgroundColor: 'rgba(50,160,248,1)'
  },
  showExampleText: {
    paddingTop: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold'
  }
});
