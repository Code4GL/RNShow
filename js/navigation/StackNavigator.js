/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-20 10:58:57
 */

'use strict';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import TabNavigator from './BottomTabNavigator';

import ComponentDetail from '../containers/components/Detail';

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
  },
  ComponentDetail: {
    screen: ComponentDetail
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
