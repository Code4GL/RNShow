/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:12:51
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 10:28:46
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
  ListCell('02', '', '', '', '', '', '', 'all'),
  ListCell('03', '', '', '', '', '', '', 'all'),
  ListCell('04', '', '', '', '', '', '', 'all'),
  ListCell('05', '', '', '', '', '', '', 'all'),
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
