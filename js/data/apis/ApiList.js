/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:12:51
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:52:01
 */

'use strict';

/**
 * 组件列表单元构造方法
 * @param {String} key 序号
 * @param {String} name Api名称
 * @param {String} description 英文描述
 * @param {String} descriptionCN 中文描述
 * @param {String} note 注意项
 * @param {String} noteCN 中文注意项
 * @param {String} route 详情路由
 * @param {String} platform 支持平台:all，ios，android
 */
function ListCell (key, name, description, descriptionCN, note, noteCN, route, platform) {
  return ({
    key,
    name,
    description,
    descriptionCN,
    note,
    noteCN,
    route,
    platform
  });
}

const ApiList = [
  ListCell('01', 'AccessibilityInfo', "Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.", '您可以使用它来查询屏幕阅读器的当前状态以及注册以便在您可以使用它来查询屏幕阅读器的当前状态以及注册时通知屏幕阅读器的状态变化。', '', '', 'AccessibilityInfo', 'all'),
  ListCell('02', 'ActionSheetIOS', 'No Description.', '没有描述。', '', '', 'ActionSheetIOS', 'ios'),
  ListCell('03', 'Alert', "Launches an alert dialog with the specified title and message.Optionally provide a list of buttons. Tapping any button will fire the respective onPress callback and dismiss the alert. By default, the only button will be an 'OK' button.This is an API that works both on iOS and Android and can show static alerts. To show an alert that prompts the user to enter some information, see AlertIOS; entering text in an alert is common on iOS only.", '使用指定的标题和消息启动警报对话框。可选择提供按钮列表。 点击任何按钮将触发相应的onPress回调并关闭警报。 默认情况下，唯一的按钮是“确定”按钮。这是一个既适用于iOS又适用于Android的API，可以显示静态警报。 要显示提示用户输入某些信息的警报，请参阅AlertIOS; 在警报中输入文本仅在iOS上很常见。', '', '', 'Alert', 'all'),
  ListCell('04', 'AlertIOS', 'AlertIOS provides functionality to create an iOS alert dialog with a message or create a prompt for user input.', 'AlertIOS提供了使用消息创建iOS警报对话框或创建用户输入提示的功能。', '', '', 'AlertIOS', 'ios'),
  ListCell('05', 'Animated', 'The Animated library is designed to make animations fluid, powerful, and easy to build and maintain. Animated focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and simple start/stop methods to control time-based animation execution.The simplest workflow for creating an animation is to create an Animated.Value, hook it up to one or more style attributes of an animated component, and then drive updates via animations using Animated.timing().', '动画库旨在使动画流畅，强大，易于构建和维护。 动画主要关注输入和输出之间的声明关系，中间可配置转换，以及控制基于时间的动画执行的简单启动/停止方法。创建动画的最简单工作流程是创建Animated.Value，将其连接到一个 或更多动画组件的样式属性，然后使用Animated.timing（）通过动画驱动更新。', '', '', 'Animated', 'all'),
  ListCell('06', '', '', '', '', '', '', 'all'),
  ListCell('07', '', '', '', '', '', '', 'all'),
  ListCell('08', '', '', '', '', '', '', 'all'),
  ListCell('09', '', '', '', '', '', '', 'all'),
  ListCell('10', '', '', '', '', '', '', 'all'),
  ListCell('11', '', '', '', '', '', '', 'all'),
  ListCell('12', '', '', '', '', '', '', 'all'),
  ListCell('13', '', '', '', '', '', '', 'all'),
  ListCell('14', '', '', '', '', '', '', 'all'),
  ListCell('15', '', '', '', '', '', '', 'all'),
  ListCell('16', '', '', '', '', '', '', 'all'),
  ListCell('17', '', '', '', '', '', '', 'all'),
  ListCell('18', '', '', '', '', '', '', 'all'),
  ListCell('19', '', '', '', '', '', '', 'all'),
  ListCell('20', '', '', '', '', '', '', 'all'),
  ListCell('21', '', '', '', '', '', '', 'all'),
  ListCell('22', '', '', '', '', '', '', 'all'),
  ListCell('23', '', '', '', '', '', '', 'all'),
  ListCell('24', '', '', '', '', '', '', 'all'),
  ListCell('25', '', '', '', '', '', '', 'all'),
  ListCell('26', '', '', '', '', '', '', 'all'),
  ListCell('27', '', '', '', '', '', '', 'all'),
  ListCell('28', '', '', '', '', '', '', 'all'),
  ListCell('29', '', '', '', '', '', '', 'all'),
  ListCell('30', '', '', '', '', '', '', 'all'),
  ListCell('31', '', '', '', '', '', '', 'all'),
  ListCell('32', '', '', '', '', '', '', 'all'),
  ListCell('33', '', '', '', '', '', '', 'all'),
  ListCell('34', '', '', '', '', '', '', 'all'),
  ListCell('35', '', '', '', '', '', '', 'all'),
  ListCell('36', '', '', '', '', '', '', 'all'),
  ListCell('37', '', '', '', '', '', '', 'all'),
  ListCell('38', '', '', '', '', '', '', 'all'),
  ListCell('39', '', '', '', '', '', '', 'all'),
  ListCell('40', '', '', '', '', '', '', 'all'),
  ListCell('41', '', '', '', '', '', '', 'all'),
  ListCell('42', '', '', '', '', '', '', 'all'),
  ListCell('43', '', '', '', '', '', '', 'all'),
  ListCell('44', '', '', '', '', '', '', 'all')
];

export default ApiList;
