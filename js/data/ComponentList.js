/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:11:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-18 14:23:10
 */

'use strict';

function ComponentCell (key, name, description, descriptionCN) {
  return ({
    key,
    name,
    description,
    descriptionCN
  });
}

const ComponentList = [
  ComponentCell('01', 'ActivityIndicator', 'Displays a circular loading indicator.', '显示循环加载指示器。'),
  ComponentCell('02', 'Button', 'A basic button component that should render nicely on any platform. Supports a minimal level of customization.', '一个基本的按钮组件，可以在任何平台上很好地呈现。 支持最低级别的自定义。')
];

export default ComponentList;
