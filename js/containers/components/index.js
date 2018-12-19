/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:19
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 14:41:58
 */

'use strict';

import React, {Component} from 'react';
import {
  StyleSheet, FlatList, View
} from 'react-native';
import ComponentListCell from '../../components/component/ComponentListCell';
import ComponentList from '../../data/ComponentList';

export default class Index extends Component {

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
      <ComponentListCell data={data.item} morePress={() => navigation.navigate(data.item.route)} />
    );
  }

  render () {
    return (
      <FlatList
        style={styles.container}
        data={ComponentList}
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
    width: '93%',
    backgroundColor: 'rgba(230,230,230,1)'
  },
  ItemSeparatorCell: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
