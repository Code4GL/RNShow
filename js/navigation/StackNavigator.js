/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:56:38
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 16:01:23
 */

'use strict';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import TabNavigator from './BottomTabNavigator';

const StackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
  }
}, {
  headerLayoutPreset: 'center'
});

export default createAppContainer(StackNavigator);
