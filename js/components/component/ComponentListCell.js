/*
 * @Author: Code4GL
 * @Date: 2018-12-17 19:39:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 16:10:51
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
        <TouchableOpacity
          style={styles.listCell}
          onPress={() => { this.setState({viewDescription: !viewDescription}); }}
        >
          <View style={styles.listCellIn}>
            <View style={styles.key}><Text style={styles.keyText}>{data.key}</Text></View>
            <View style={styles.name}>
              <Text style={styles.nameText} selectable>{data.name}</Text>
            </View>
            <View style={styles.moreIcon}><Text style={styles.moreIconText}>|</Text></View>

            <TouchableOpacity style={styles.more} onPress={morePress}>
              <Text style={styles.moreText}>更多</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        {/* 组件中英文描述 */}
        {viewDescription
          ? (
            <View style={styles.detail}>
              <View style={styles.description}>
                <View style={styles.englishTitle}>
                  <Text style={styles.englishTitleText}>English:</Text>
                </View>
                <View style={styles.english}>
                  <Text style={styles.englishText} selectable>{data.description}</Text>
                </View>
              </View>
              <View style={styles.descriptionCN}>
                <View style={styles.chineseTitle}>
                  <Text style={styles.chineseTitleText}>中文:</Text>
                </View>
                <View style={styles.chinese}>
                  <Text style={styles.chineseText} selectable>{data.descriptionCN}</Text>
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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listCellIn: {
    height: 50,
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  key: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    width: '75%'
  },
  moreIcon: {
    width: '1%'
  },
  more: {
    height: 40,
    width: '14%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyText: {
    // fontWeight: 'bold'
  },
  nameText: {
    fontWeight: 'bold'
  },
  moreIconText: {
    color: 'rgba(180,180,180,1)'
  },
  moreText: {
    color: 'rgba(50,160,248,1)',
    fontWeight: 'bold'
  },
  detail: {
    backgroundColor: 'white'
  },
  // 英文详情
  description: {
    flexDirection: 'row',
    backgroundColor: 'rgba(228,231,236,0.5)'
  },
  englishTitle: {
    width: '15%',
    alignItems: 'center'
  },
  english: {
    width: '85%'
  },
  englishTitleText: {
    lineHeight: 20,
    fontWeight: 'bold'
  },
  englishText: {
    lineHeight: 20
  },
  // 中文详情
  descriptionCN: {
    flexDirection: 'row',
    backgroundColor: 'rgba(228,231,236,0.8)'
  },
  chineseTitle: {
    width: '15%',
    alignItems: 'center'
  },
  chinese: {
    width: '85%'
  },
  chineseTitleText: {
    lineHeight: 20,
    fontWeight: 'bold'
  },
  chineseText: {
    lineHeight: 20
  }
});
