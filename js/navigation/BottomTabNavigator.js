/*
 * @Author: Code4GL
 * @Date: 2018-12-17 14:59:33
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-17 19:50:57
 */

'use strict';

import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

import About from '../containers/about/index';
import APIs from '../containers/apis/index';
import Basics from '../containers/basics/index';
import Components from '../containers/components/index';
import Guides from '../containers/guides/index';

const BottomTabNavigator = createBottomTabNavigator({
  Basics: {
    screen: Basics
  },
  Guides: {
    screen: Guides
  },
  Components: {
    screen: Components
  },
  APIs: {
    screen: APIs
  },
  About: {
    screen: About
  }
}, {

});

export default createAppContainer(BottomTabNavigator);
