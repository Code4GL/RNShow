/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 16:34:23
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

import ApiDetail from '../containers/apis/Detail';
import AccessibilityInfo from '../containers/apis/example/AccessibilityInfo';
import ActionSheetIOS from '../containers/apis/example/ActionSheetIOS';
import Alert from '../containers/apis/example/Alert';
import AlertIOS from '../containers/apis/example/AlertIOS';
import Animated from '../containers/apis/example/Animated';
import AppRegistry from '../containers/apis/example/AppRegistry';
import AppState from '../containers/apis/example/AppState';
import AsyncStorage from '../containers/apis/example/AsyncStorage';
import BackAndroid from '../containers/apis/example/BackAndroid';
import BackHandler from '../containers/apis/example/BackHandler';
import CameraRoll from '../containers/apis/example/CameraRoll';
import DatePickerAndroid from '../containers/apis/example/DatePickerAndroid';
import Dimensions from '../containers/apis/example/Dimensions';
import Easing from '../containers/apis/example/Easing';
import Geolocation from '../containers/apis/example/Geolocation';
import ImageEditor from '../containers/apis/example/ImageEditor';
import ImagePickerIOS from '../containers/apis/example/ImagePickerIOS';
import ImageStore from '../containers/apis/example/ImageStore';
import ImageStyleProps from '../containers/apis/example/ImageStyleProps';
import InteractionManager from '../containers/apis/example/InteractionManager';
import Keyboard from '../containers/apis/example/Keyboard';
import LayoutProps from '../containers/apis/example/LayoutProps';
import LayoutAnimation from '../containers/apis/example/LayoutAnimation';
import Linking from '../containers/apis/example/Linking';
import ListViewDataSource from '../containers/apis/example/ListViewDataSource';
import NetInfo from '../containers/apis/example/NetInfo';
import PanResponder from '../containers/apis/example/PanResponder';
import PermissionsAndroid from '../containers/apis/example/PermissionsAndroid';
import PixelRatio from '../containers/apis/example/PixelRatio';
import PushNotificationIOS from '../containers/apis/example/PushNotificationIOS';
import Settings from '../containers/apis/example/Settings';
import ShadowProps from '../containers/apis/example/ShadowProps';
import Share from '../containers/apis/example/Share';
import StatusBarIOS from '../containers/apis/example/StatusBarIOS';
import StyleSheet from '../containers/apis/example/StyleSheet';
import Systrace from '../containers/apis/example/Systrace';
import TextStyleProps from '../containers/apis/example/TextStyleProps';
import TimePickerAndroid from '../containers/apis/example/TimePickerAndroid';
import ToastAndroid from '../containers/apis/example/ToastAndroid';
import Transforms from '../containers/apis/example/Transforms';
import Vibration from '../containers/apis/example/Vibration';
import VibrationIOS from '../containers/apis/example/VibrationIOS';
import ViewStyleProps from '../containers/apis/example/ViewStyleProps';

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
  },
  // -----------Components-----------------
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
  },
  // -----------------APIs------------------
  ApiDetail: {
    screen: ApiDetail
  },
  AccessibilityInfo: {
    screen: AccessibilityInfo
  },
  ActionSheetIOS: {
    screen: ActionSheetIOS
  },
  Alert: {
    screen: Alert
  },
  AlertIOS: {
    screen: AlertIOS
  },
  Animated: {
    screen: Animated
  },
  AppRegistry: {
    screen: AppRegistry
  },
  AppState: {
    screen: AppState
  },
  AsyncStorage: {
    screen: AsyncStorage
  },
  BackAndroid: {
    screen: BackAndroid
  },
  BackHandler: {
    screen: BackHandler
  },
  CameraRoll: {
    screen: CameraRoll
  },
  DatePickerAndroid: {
    screen: DatePickerAndroid
  },
  Dimensions: {
    screen: Dimensions
  },
  Easing: {
    screen: Easing
  },
  Geolocation: {
    screen: Geolocation
  },
  ImageEditor: {
    screen: ImageEditor
  },
  ImagePickerIOS: {
    screen: ImagePickerIOS
  },
  ImageStore: {
    screen: ImageStore
  },
  ImageStyleProps: {
    screen: ImageStyleProps
  },
  InteractionManager: {
    screen: InteractionManager
  },
  Keyboard: {
    screen: Keyboard
  },
  LayoutProps: {
    screen: LayoutProps
  },
  LayoutAnimation: {
    screen: LayoutAnimation
  },
  Linking: {
    screen: Linking
  },
  ListViewDataSource: {
    screen: ListViewDataSource
  },
  NetInfo: {
    screen: NetInfo
  },
  PanResponder: {
    screen: PanResponder
  },
  PermissionsAndroid: {
    screen: PermissionsAndroid
  },
  PixelRatio: {
    screen: PixelRatio
  },
  PushNotificationIOS: {
    screen: PushNotificationIOS
  },
  Settings: {
    screen: Settings
  },
  ShadowProps: {
    screen: ShadowProps
  },
  Share: {
    screen: Share
  },
  StatusBarIOS: {
    screen: StatusBarIOS
  },
  StyleSheet: {
    screen: StyleSheet
  },
  Systrace: {
    screen: Systrace
  },
  TextStyleProps: {
    screen: TextStyleProps
  },
  TimePickerAndroid: {
    screen: TimePickerAndroid
  },
  ToastAndroid: {
    screen: ToastAndroid
  },
  Transforms: {
    screen: Transforms
  },
  Vibration: {
    screen: Vibration
  },
  VibrationIOS: {
    screen: VibrationIOS
  },
  ViewStyleProps: {
    screen: ViewStyleProps
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
