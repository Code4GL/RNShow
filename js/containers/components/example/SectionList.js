/*
 * @Author: Code4GL
 * @Date: 2018-12-23 22:19:56
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 22:21:14
 */

'use strict';

import React, { Component } from 'react';
import { SectionList, Text } from 'react-native';

export default class SectionListScreen extends Component {

  render () {
    return (
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']}
        ]}
        keyExtractor={(item, index) => item + index}
      />);
  }
}
