/** @format */

import {AppRegistry,YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// react-navigation自身BUG警告忽略
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader','Remote debugger is in a background tab']);


AppRegistry.registerComponent(appName, () => App);
