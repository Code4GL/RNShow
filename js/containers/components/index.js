/*
 * @Author: Code4GL 
 * @Date: 2018-12-17 15:24:19 
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 19:51:40
 */
'use strict';

import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ComponentListCell from './../../components/component/ComponentListCell';
import {ComponentList} from './../../data/ComponentList'; 

export default class Index extends Component {
    constructor(props){
        super(props)
    }

    renderItems (data){
        return(
            <ComponentListCell data={data}>
            </ComponentListCell>
        )
    }

    render() {
        return (
            <FlatList
                data={ComponentList} 
                renderItem={this.renderItems}>
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});