/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 16:43:56
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
import Image from '../containers/components/example/Image';
import ImageBackground from '../containers/components/example/ImageBackground';
import InputAccessoryView from '../containers/components/example/InputAccessoryView';

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
  },
  Image: {
    screen: Image
  },
  ImageBackground: {
    screen: ImageBackground
  },
  InputAccessoryView: {
    screen: InputAccessoryView
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
