/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:58
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-30 13:39:10
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, FlatList, View, Platform, Alert, Image
} from 'react-native';
import ComponentListCell from '../../components/component/ComponentListCell';
import ApiList from '../../data/apis/ApiList';

const image = require('./../../image/icon/process.png');
const imageSelected = require('./../../image/icon/process-selected.png');

export default class Index extends Component {

  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Image style={styles.tabBarIcon} source={focused ? imageSelected : image} />
    )
  };

  creatItemSeparator () {
    return (
      <View style={styles.ItemSeparatorCell}>
        <View style={styles.ItemSeparator} />
      </View>
    );
  }

  renderItems = (data) => {
    const {navigation} = this.props;
    return (
      <ComponentListCell
        data={data.item}
        morePress={() => {
          if (Platform.OS === 'ios') {
            if (data.item.platform === 'all' || data.item.platform === 'ios') {
              return navigation.navigate('ApiDetail', { detail: data.item});
            } else {
              return Alert.alert('该组件不支持IOS系统，请在Android系统上查看！');
            }
          } else {
            if (data.item.platform === 'all' || data.item.platform === 'android') {
              return navigation.navigate('ApiDetail', { detail: data.item});
            } else {
              return Alert.alert('该组件不支持Android系统，请在IOS系统上查看！');
            }
          }
        }}
      />
    );
  }

  render () {
    return (
      <FlatList
        style={styles.container}
        data={ApiList}
        renderItem={this.renderItems}
        ItemSeparatorComponent={this.creatItemSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  ItemSeparator: {
    height: 1,
    width: '95%',
    backgroundColor: 'rgba(230,230,230,1)'
  },
  ItemSeparatorCell: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarIcon: {
    height: 20,
    width: 20
  }
});
