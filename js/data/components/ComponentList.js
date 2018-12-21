/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:11:47
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 15:48:53
 */

'use strict';

/**
 * 组件列表单元构造方法
 * @param {String} key 序号
 * @param {String} name 组件名称
 * @param {String} description 英文描述
 * @param {String} descriptionCN 中文描述
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

const ComponentList = [
  ListCell('01', 'ActivityIndicator', 'Displays a circular loading indicator.', '显示循环加载指示器。', '', '', 'ActivityIndicator', 'all'),
  ListCell('02', 'Button', 'A basic button component that should render nicely on any platform. Supports a minimal level of customization.', '一个基本的按钮组件，可以在任何平台上很好地呈现。 支持最低级别的自定义。', '', '', 'Button', 'all'),
  ListCell('03', 'DatePickerIOS', "Use DatePickerIOS to render a date/time picker (selector) on iOS. This is a controlled component, so you must hook in to the onDateChange callback and update the date prop in order for the component to update, otherwise the user's change will be reverted immediately to reflect props.date as the source of truth.", '使用DatePickerIOS在iOS上呈现日期/时间选择器（选择器）。 这是一个受控组件，因此您必须挂钩onDateChange回调并更新日期道具以便组件更新，否则将立即恢复用户的更改以反映props.date作为事实的来源。', '', '', 'DatePickerIOS', 'ios'),
  ListCell('04', 'DrawerLayoutAndroid', 'React component that wraps the platform DrawerLayout (Android only). The Drawer (typically used for navigation) is rendered with renderNavigationView and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the drawerPosition prop and its width can be set by the drawerWidth prop.', '包含平台DrawerLayout的React组件（仅限Android）。 抽屉（通常用于导航）使用renderNavigationView渲染，直接子视图是主视图（内容所在的位置）。 导航视图最初在屏幕上不可见，但可以从drawerPosition prop指定的窗口侧拉入，其宽度可以由drawerWidth prop设置。', '', '', 'DrawerLayoutAndroid', 'android'),
  ListCell('05', 'FlatList', 'A performant interface for rendering simple, flat lists, supporting the most handy features:Fully cross-platform.Optional horizontal mode.Configurable viewability callbacks.Header support.Footer support.Separator support.Pull to Refresh.Scroll loading.ScrollToIndex support.If you need section support, use <SectionList>.', '一个高性能的界面，用于渲染简单，扁平的列表，支持最方便的功能：完全跨平台，可选水平模式，可配置的可见度回调，标题支持，页脚支持，分隔支持，拉到刷新，滚动加载，ScrollToIndex支持。如果需要节支持，请使用<SectionList>。', '', '', 'FlatList', 'all'),
  ListCell('06', 'Image', "A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the 'data:' uri scheme.", 'React组件，用于显示不同类型的图像，包括网络图像，静态资源，临时本地图像和本地磁盘中的图像，例如相机胶卷。此示例显示从本地存储中获取和显示图像，以及从网络中获取图像，甚至从“data：”uri方案中提供的数据。', 'Note that for network and data images, you will need to manually specify the dimensions of your image!', '请注意，对于网络和数据图像，您需要手动指定图像的尺寸！', 'Image', 'all'),
  ListCell('07', 'ImageBackground', "A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the <ImageBackground> component, which has the same props as <Image>, and add whatever children to it you would like to layer on top of it.You might not want to use <ImageBackground> in some cases, since the implementation is very simple. Refer to <ImageBackground>'s source code for more insight, and create your own custom component when needed.", '熟悉Web的开发人员的常见功能请求是背景图像。 要处理此用例，您可以使用<ImageBackground>组件，该组件与<Image>具有相同的道具，并添加要在其上层叠的子项。在某些情况下，您可能不想使用<ImageBackground>，因为实现非常简单。 有关更多信息，请参阅<ImageBackground>的源代码，并在需要时创建自己的自定义组件。', 'Note that you must specify some width and height style attributes.', '请注意，您必须指定一些宽度和高度样式属性。', 'ImageBackground', 'all')
  // ListCell('05', '', '', '','','','','')
];

export default ComponentList;
