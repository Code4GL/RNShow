/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-22 14:57:53
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
import KeyboardAvoidingView from '../containers/components/example/KeyboardAvoidingView';
import ListView from '../containers/components/example/ListView';
import MaskedViewIOS from '../containers/components/example/MaskedViewIOS';
import Modal from '../containers/components/example/Modal';

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
  },
  KeyboardAvoidingView: {
    screen: KeyboardAvoidingView
  },
  ListView: {
    screen: ListView
  },
  MaskedViewIOS: {
    screen: MaskedViewIOS
  },
  Modal: {
    screen: Modal
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
