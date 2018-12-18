/*
 * @Author: Code4GL
 * @Date: 2018-12-17 15:24:19
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 18:13:24
 */

'use strict';

import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ComponentListCell from '../../components/component/ComponentListCell';
import ComponentList from '../../data/ComponentList';

export default class Index extends Component {

  renderItems = (data) => {
    const {navigation} = this.props;
    return (
      <ComponentListCell data={data.item} morePress={() => navigation.navigate(data.item.route)} />
    );
  }

  render () {
    console.log(this.props);
    return (
      <FlatList
        style={styles.container}
        data={ComponentList}
        renderItem={this.renderItems}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1}
});
