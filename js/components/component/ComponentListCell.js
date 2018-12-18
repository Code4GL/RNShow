/*
 * @Author: Code4GL
 * @Date: 2018-12-17 19:39:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 18:38:01
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
    let {data, morePress} = this.props;
    return (
      <View style={styles.container}>
        {/* 列表单元 */}
        <View style={styles.listCell}>
          <TouchableOpacity
            style={styles.leftPart}
            onPress={() => { this.setState({viewDescription: !viewDescription}); }}
          >
            <View style={styles.keyText}><Text>{data.key}</Text></View>
            <View style={styles.nameText}><Text>{data.name}</Text></View>
            <View style={styles.moreIcon}><Text>*</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightPart} onPress={morePress}>
            <Text>更多</Text>
          </TouchableOpacity>
        </View>
        {/* 组件中英文描述 */}
        {viewDescription
          ? (
            <View style={styles.detail}>
              <View style={styles.description}>
                <View style={styles.englishTitle}>
                  <Text style={styles.englishTitleText}>English:</Text>
                </View>
                <View style={styles.english}>
                  <Text style={styles.englishText}>{data.description}</Text>
                </View>
              </View>
              <View style={styles.descriptionCN}>
                <View style={styles.chineseTitle}>
                  <Text style={styles.chineseTitleText}>中文:</Text>
                </View>
                <View style={styles.chinese}>
                  <Text style={styles.chineseText}>{data.descriptionCN}</Text>
                </View>
              </View>
            </View>
          )
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // 列表单元
  listCell: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftPart: {
    height: 40,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(178,178,178,0.1)'
  },
  keyText: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameText: {
    width: '80%'
  },
  moreIcon: {
    width: '5%'
  },
  rightPart: {
    height: 40,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  detail: {
    backgroundColor: 'white'
  },
  // 英文详情
  description: {
    flexDirection: 'row',
    backgroundColor: 'lightgray'
  },
  englishTitle: {
    width: '15%',
    alignItems: 'center'
  },
  english: {
    width: '85%'
  },
  englishTitleText: {
    lineHeight: 30,
    fontWeight: 'bold'
  },
  englishText: {
    lineHeight: 30
  },
  // 中文详情
  descriptionCN: {
    flexDirection: 'row',
    backgroundColor: 'lightblue'
  },
  chineseTitle: {
    width: '15%',
    alignItems: 'center'
  },
  chinese: {
    width: '85%'
  },
  chineseTitleText: {
    lineHeight: 30,
    fontWeight: 'bold'
  },
  chineseText: {
    lineHeight: 30
  }
});
