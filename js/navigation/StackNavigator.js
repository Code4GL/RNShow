/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-19 15:36:22
 */

'use strict';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import TabNavigator from './BottomTabNavigator';

import ActivityIndicator from '../containers/components/ActivityIndicator';
import Button from '../containers/components/Button';
import DatePickerIOS from '../containers/components/DatePickerIOS';
import DrawerLayoutAndroid from '../containers/components/DrawerLayoutAndroid';
import FlatList from '../containers/components/FlatList';

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
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
