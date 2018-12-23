/*
 * @Author: Code4GL
 * @Date: 2018-12-23 21:52:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 21:57:47
 */

'use strict';

import React, { Component } from 'react';
import {
  ScrollView,
  RefreshControl
} from 'react-native';

export default class RefreshControlScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentWillUnmount () {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

    _onRefresh = () => {
      this.setState({refreshing: true});
      this.timer = setTimeout(
        () => {
          this.setState({refreshing: false});
        },
        1000
      );
    }

    render () {
      let {refreshing} = this.state;
      return (
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          )}
        />
      );
    }

}
