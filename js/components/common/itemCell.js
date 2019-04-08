/*
 * @Author: Code4GL
 * @Date: 2019-04-08 17:46:54
 * @Last Modified by: Code4GL
 * @Last Modified time: 2019-04-08 17:47:14
 */

'use strict';

import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

const right = require('./../../image/right.png');

class ItemCell extends Component {
  render () {
    const {
      press, icon, title, content
    } = this.props;
    return (
      <TouchableOpacity onPress={press} style={styles.itemCell}>
        <Image style={styles.icon} source={icon} />
        <Text style={styles.title}>{title}</Text>
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
        <Text style={styles.content}>{content}</Text>
        <Image style={styles.more} source={right} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemCell: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 17,
    paddingLeft: 15,
    color: '#1c1c1c'
  },
  content: {
    fontSize: 17,
    color: '#999'
  },
  icon: {
    width: 40,
    height: 40,
    marginLeft: 15,
    borderRadius: 5
  },
  more: {
    width: 20,
    height: 20,
    marginLeft: 5,
    marginRight: 10
  }
});

export default ItemCell;
