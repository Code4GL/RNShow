/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-23 23:35:02
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
import NavigatorIOS from '../containers/components/example/NavigatorIOS';
import Picker from '../containers/components/example/Picker';
import PickerIOS from '../containers/components/example/PickerIOS';
import ProgressBarAndroid from '../containers/components/example/ProgressBarAndroid';
import ProgressViewIOS from '../containers/components/example/ProgressViewIOS';
import RefreshControl from '../containers/components/example/RefreshControl';
import SafeAreaView from '../containers/components/example/SafeAreaView';
import ScrollView from '../containers/components/example/ScrollView';
import SectionList from '../containers/components/example/SectionList';
import SegmentedControlIOS from '../containers/components/example/SegmentedControlIOS';
import Slider from '../containers/components/example/Slider';
import SnapshotViewIOS from '../containers/components/example/SnapshotViewIOS';
import StatusBar from '../containers/components/example/StatusBar';
import Switch from '../containers/components/example/Switch';
import TabBarIOS from '../containers/components/example/TabBarIOS';
import TabBarIOSItem from '../containers/components/example/TabBarIOSItem';
import Text from '../containers/components/example/Text';
import TextInput from '../containers/components/example/TextInput';
import ToolbarAndroid from '../containers/components/example/ToolbarAndroid';
import TouchableHighlight from '../containers/components/example/TouchableHighlight';
import TouchableNativeFeedback from '../containers/components/example/TouchableNativeFeedback';
import TouchableOpacity from '../containers/components/example/TouchableOpacity';
import TouchableWithoutFeedback from '../containers/components/example/TouchableWithoutFeedback';
import View from '../containers/components/example/View';
import ViewPagerAndroid from '../containers/components/example/ViewPagerAndroid';
import VirtualizedList from '../containers/components/example/VirtualizedList';
import WebView from '../containers/components/example/WebView ';

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
  },
  NavigatorIOS: {
    screen: NavigatorIOS
  },
  Picker: {
    screen: Picker
  },
  PickerIOS: {
    screen: PickerIOS
  },
  ProgressBarAndroid: {
    screen: ProgressBarAndroid
  },
  ProgressViewIOS: {
    screen: ProgressViewIOS
  },
  RefreshControl: {
    screen: RefreshControl
  },
  SafeAreaView: {
    screen: SafeAreaView
  },
  ScrollView: {
    screen: ScrollView
  },
  SectionList: {
    screen: SectionList
  },
  SegmentedControlIOS: {
    screen: SegmentedControlIOS
  },
  Slider: {
    screen: Slider
  },
  SnapshotViewIOS: {
    screen: SnapshotViewIOS
  },
  StatusBar: {
    screen: StatusBar
  },
  Switch: {
    screen: Switch
  },
  TabBarIOS: {
    screen: TabBarIOS
  },
  TabBarIOSItem: {
    screen: TabBarIOSItem
  },
  Text: {
    screen: Text
  },
  TextInput: {
    screen: TextInput
  },
  ToolbarAndroid: {
    screen: ToolbarAndroid
  },
  TouchableHighlight: {
    screen: TouchableHighlight
  },
  TouchableNativeFeedback: {
    screen: TouchableNativeFeedback
  },
  TouchableOpacity: {
    screen: TouchableOpacity
  },
  TouchableWithoutFeedback: {
    screen: TouchableWithoutFeedback
  },
  View: {
    screen: View
  },
  ViewPagerAndroid: {
    screen: ViewPagerAndroid
  },
  VirtualizedList: {
    screen: VirtualizedList
  },
  WebView: {
    screen: WebView
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
