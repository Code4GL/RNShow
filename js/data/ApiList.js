/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:12:51
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 14:23:30
 */

'use strict';

function ApiCell (key, name, description, descriptionCN) {
  return ({
    key,
    name,
    description,
    descriptionCN
  });
}

const ApiList = [
  ApiCell('01', 'AccessibilityInfo', "Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.", '有时，了解设备是否具有当前活动的屏幕阅读器是有用的。 AccessibilityInfo API专为此目的而设计。 您可以使用它来查询屏幕阅读器的当前状态，以及注册以在屏幕阅读器状态发生变化时收到通知。'),
  ApiCell('02', 'ActionSheetIOS', '', '')
];

export default ApiList;
