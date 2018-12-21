/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 13:55:32
 */

'use strict';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import TabNavigator from './BottomTabNavigator';

import ComponentDetail from '../containers/components/Detail';
import ActivityIndicator from '../containers/components/example/ActivityIndicator';
import Button from '../containers/components/example/Button';
import DatePickerIOS from '../containers/components/example/DatePickerIOS';
import DrawerLayoutAndroid from '../containers/components/example/DrawerLayoutAndroid';
import FlatList from '../containers/components/example/FlatList';

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
  },
  ComponentDetail: {
    screen: ComponentDetail
  },
  ActivityIndicator: {
    screen: ActivityIndicator
  },
  Button: {
    screen: Button
  },
  DatePickerIOS: {
    screen: DatePickerIOS
  },
  DrawerLayoutAndroid: {
    screen: DrawerLayoutAndroid
  },
  FlatList: {
    screen: FlatList
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
