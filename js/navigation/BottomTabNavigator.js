/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:59:33
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:31:04
 */

'use strict';

import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import About from '../containers/about/index';
import APIs from '../containers/apis/index';
import Components from '../containers/components/index';
import ThirdParty from '../containers/thirdParty/index';

const BottomTabNavigator = createBottomTabNavigator({
  Components: {
    screen: Components
  },
  APIs: {
    screen: APIs
  },
  ThirdParty: {
    screen: ThirdParty
  },
  About: {
    screen: About
  }
}, {
  initialRouteName: 'APIs'
});

export default createAppContainer(BottomTabNavigator);
