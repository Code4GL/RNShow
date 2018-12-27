/*
 * @Author: Code4GL
 * @Date: 2018-12-17 16:12:51
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-27 15:35:29
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
  ListCell('06', 'AppRegistry', "This API only works in projects made with react-native init or in those made with Create React Native App which have since ejected. For more information about ejecting, please see the guide on the Create React Native App repository.AppRegistry is the JS entry point to running all React Native apps. App root components should register themselves with AppRegistry.registerComponent, then the native system can load the bundle for the app and then actually run the app when it's ready by invoking AppRegistry.runApplication.To 'stop' an application when a view should be destroyed, call AppRegistry.unmountApplicationComponentAtRootTag with the tag that was passed into runApplication. These should always be used as a pair.AppRegistry should be required early in the require sequence to make sure the JS execution environment is setup before other modules are required.", '此API仅适用于使用react-native init或使用Create React Native App制作的项目，这些项目已经弹出。 有关弹出的更多信息，请参阅Create React Native App repository的指南.AppRegistry是运行所有React Native应用程序的JS入口点。 应用程序根组件应该使用AppRegistry.registerComponent注册自己，然后本机系统可以为应用程序加载包，然后通过调用AppRegistry.runApplication实际运行应用程序。当应该销毁视图时“停止”应用程序， 使用传递给runApplication的标记调用AppRegistry.unmountApplicationComponentAtRootTag。 这些应该始终用作pair.AppRegistry应该在require序列的早期需要，以确保在需要其他模块之前设置JS执行环境。', '', '', 'AppRegistry', 'all'),
  ListCell('07', 'AppState', 'AppState can tell you if the app is in the foreground or background, and notify you when the state changes.AppState is frequently used to determine the intent and proper behavior when handling push notifications.', 'AppState可以告诉您应用程序是在前台还是后台，并在状态更改时通知您.AppState经常用于确定处理推送通知时的意图和正确行为。', '', '', 'AppState', 'all'),
  ListCell('08', 'AsyncStorage', 'AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.It is recommended that you use an abstraction on top of AsyncStorage instead of AsyncStorage directly for anything more than light usage since it operates globally.On iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.The AsyncStorage JavaScript code is a simple facade that provides a clear JavaScript API, real Error objects, and simple non-multi functions. Each method in the API returns a Promise object.', 'AsyncStorage是一个简单的，未加密的，异步的，持久的键值存储系统，对应用程序来说是全局的。 应该使用它而不是LocalStorage。建议您在AsyncStorage之上使用抽象而不是AsyncStorage直接用于除了轻量级之外的任何操作，因为它全局操作。在iOS上，AsyncStorage由本机代码支持，该代码将小值存储在 序列化字典和单独文件中的较大值。 在Android上，AsyncStorage将根据可用内容使用RocksDB或SQLite .AsyncStorage JavaScript代码是一个简单的外观，提供清晰的JavaScript API，真正的Error对象和简单的非多功能。 API中的每个方法都返回一个Promise对象。', '', '', 'AsyncStorage', 'all'),
  ListCell('09', 'BackAndroid', 'Deprecated. Use BackHandler instead.', '已过时。 请改用BackHandler。', '', '', 'BackAndroid', 'android'),
  ListCell('10', 'BackHandler', 'Detect hardware button presses for back navigation.Android: Detect hardware back button presses, and programmatically invoke the default back button functionality to exit the app if there are no listeners or if none of the listeners return true.tvOS: Detect presses of the menu button on the TV remote. (Still to be implemented: programmatically disable menu button handling functionality to exit the app if there are no listeners or if none of the listeners return true.)iOS: Not applicable.The event subscriptions are called in reverse order (i.e. last registered subscription first), and if one subscription returns true then subscriptions registered earlier will not be called.', '检测硬件按钮按下以进行后退导航.Android：检测硬件后退按钮按下，并以编程方式调用默认后退按钮功能以退出应用程序，如果没有侦听器或没有任何侦听器返回true.tvOS：检测按下菜单按钮 在电视遥控器上。 （仍有待实现：如果没有侦听器或者没有任何侦听器返回true，则以编程方式禁用菜单按钮处理功能以退出应用程序。）iOS：不适用。事件订阅以相反的顺序调用（即最后一次注册的订阅 ），如果一个订阅返回true，则不会调用先前注册的订阅。', '', '', 'BackHandler', 'android'),
  ListCell('11', 'CameraRoll', "CameraRoll provides access to the local camera roll or photo library.On iOS, the CameraRoll API requires the RCTCameraRoll library to be linked. You can refer to Linking Libraries (iOS) to learn more.Permissions:The user's permission is required in order to access the Camera Roll on devices running iOS 10 or later. Add the NSPhotoLibraryUsageDescription key in your Info.plist with a string that describes how your app will use this data. This key will appear as Privacy - Photo Library Usage Description in Xcode.If you are targeting devices running iOS 11 or later, you will also need to add the NSPhotoLibraryAddUsageDescription key in your Info.plist. Use this key to define a string that describes how your app will use this data. By adding this key to your Info.plist, you will be able to request write-only access permission from the user. If you try to save to the camera roll without this permission, your app will exit.", 'CameraRoll提供对本地相机胶卷或照片库的访问。在iOS上，CameraRoll API需要链接RCTCameraRoll库。 您可以参考链接库（iOS）以了解更多信息。权限：要在运行iOS 10或更高版本的设备上访问“相机胶卷”，需要用户的许可。 在Info.plist中添加NSPhotoLibraryUsageDescription键，其中包含一个描述您的应用将如何使用此数据的字符串。 此密钥将在Xcode中显示为隐私 - 照片库使用说明。如果您的目标是运行iOS 11或更高版本的设备，则还需要在Info.plist中添加NSPhotoLibraryAddUsageDescription密钥。 使用此键定义一个字符串，该字符串描述您的应用将如何使用此数据。 通过将此密钥添加到Info.plist，您将能够请求用户的只写访问权限。 如果您在未经此许可的情况下尝试保存到相机胶卷，您的应用将退出。', '', '', 'CameraRoll', 'all'),
  ListCell('12', 'Clipboard', 'Clipboard gives you an interface for setting and getting content from Clipboard on both iOS and Android.', '剪贴板为您提供了一个界面，用于在iOS和Android上设置和获取剪贴板中的内容。', '', '', 'Clipboard', 'all'),
  ListCell('13', 'DatePickerAndroid', 'Opens the standard Android date picker dialog.', '打开标准的Android日期选择器对话框。', '', '', 'DatePickerAndroid', 'android'),
  ListCell('14', 'Dimensions', 'No Description.', '没有描述。', '', '', 'Dimensions', 'all'),
  ListCell('15', 'Easing', 'The Easing module implements common easing functions. This module is used by Animated.timing() to convey physically believable motion in animations.You can find a visualization of some common easing functions at http://easings.net/.', 'Easing模块实现了常见的缓动功能。 Animated.timing（）使用此模块在动画中传达物理上可信的动作。您可以在http://easings.net/找到一些常见的缓动函数的可视化。', '', '', 'Easing', 'all'),
  ListCell('16', 'Geolocation', 'The Geolocation API extends the Geolocation web spec.As a browser polyfill, this API is available through the navigator.geolocation global - you do not need to import it.', 'Geolocation API扩展了Geolocation web规范。作为浏览器polyfill，此API可通过navigator.geolocation global获得 - 您无需导入它。', '', '', 'Geolocation', 'all'),
  ListCell('17', 'ImageEditor', 'No Description.', '没有描述。', '', '', 'ImageEditor', 'all'),
  ListCell('18', 'ImagePickerIOS', 'No Description.', '没有描述。', '', '', 'ImagePickerIOS', 'ios'),
  ListCell('19', 'ImageStore', 'No Description.', '没有描述。', '', '', 'ImageStore', 'all'),
  ListCell('20', 'ImageStyleProps', 'No Description.', '没有描述。', '', '', 'ImageStyleProps', 'all'),
  ListCell('21', 'InteractionManager', 'InteractionManager allows long-running work to be scheduled after any interactions/animations have completed. In particular, this allows JavaScript animations to run smoothly.By default, queued tasks are executed together in a loop in one setImmediate batch. If setDeadline is called with a positive number, then tasks will only be executed until the deadline (in terms of js event loop run time) approaches, at which point execution will yield via setTimeout, allowing events such as touches to start interactions and block queued tasks from executing, making apps more responsive.', 'InteractionManager允许在任何交互/动画完成后安排长时间运行的工作。 特别是，这允许JavaScript动画顺利运行。默认情况下，排队的任务在一个setImmediate批处理中循环执行。 如果使用正数调用setDeadline，则任务将仅在截止日期（根据js事件循环运行时间）接近时执行，此时执行将通过setTimeout产生，允许触摸等事件开始交互并阻塞排队 执行任务，使应用程序更具响应性。', '', '', 'InteractionManager', 'all'),
  ListCell('22', 'Keyboard', 'Keyboard module to control keyboard events.', '键盘模块控制键盘事件。', '', '', 'Keyboard', 'all'),
  ListCell('23', 'LayoutProps', 'No Description.', '没有描述。', '', '', 'LayoutProps', 'all'),
  ListCell('24', 'LayoutAnimation', 'Automatically animates views to their new positions when the next layout happens.A common way to use this API is to call it before calling setState.', '在下一个布局发生时，自动将视图设置为新位置的动画。使用此API的常用方法是在调用setState之前调用它。', 'Note that in order to get this to work on Android you need to set the following flags via UIManager:UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);', '请注意，为了使其在Android上运行，您需要通过UIManager设置以下标志：UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental（true）;', 'LayoutAnimation', 'all'),
  ListCell('25', 'Linking', 'This section only applies to projects made with react-native init or to those made with Create React Native App which have since ejected. For more information about ejecting, please see the guide on the Create React Native App repository.Linking gives you a general interface to interact with both incoming and outgoing app links.', '本节仅适用于使用react-native init或使用Create React Native App制作的项目，这些项目已经弹出。 有关弹出的更多信息，请参阅Create React Native App repository的指南.Link为您提供了一个与传入和传出应用程序链接进行交互的通用界面。', 'For instructions on how to add support for deep linking on Android, refer to Enabling Deep Links for App Content - Add Intent Filters for Your Deep Links.', '有关如何在Android上添加对深层链接的支持的说明，请参阅为应用程序内容启用深层链接 - 为深层链接添加意图过滤器。', 'Linking', 'all'),
  ListCell('26', 'ListViewDataSource', "Provides efficient data processing and access to the ListView component. A ListViewDataSource is created with functions for extracting data from the input blob, and comparing elements (with default implementations for convenience). The input blob can be as simple as an array of strings, or an object with rows nested inside section objects.To update the data in the datasource, use cloneWithRows (or cloneWithRowsAndSections if you care about sections). The data in the data source is immutable, so you can't modify it directly. The clone methods suck in the new data and compute a diff for each row so ListView knows whether to re-render it or not.", '提供有效的数据处理和对ListView组件的访问。创建一个ListViewDataSource，其函数用于从输入blob中提取数据，并比较元素（为方便起见，使用默认实现）。输入blob可以像字符串数组一样简单，也可以是嵌套在section对象中的行的对象。要更新数据源中的数据，请使用cloneWithRows（如果关心节，则使用cloneWithRowsAndSections）。数据源中的数据是不可变的，因此您无法直接修改它。克隆方法吸收新数据并计算每行的差异，以便ListView知道是否重新渲染它。', '', '', 'ListViewDataSource', 'all'),
  ListCell('27', 'NetInfo', 'NetInfo exposes info about online/offline status.', 'NetInfo公开有关在线/离线状态的信息。', '', '', 'NetInfo', 'all'),
  ListCell('28', 'PanResponder', 'PanResponder reconciles several touches into a single gesture. It makes single-touch gestures resilient to extra touches, and can be used to recognize simple multi-touch gestures.By default, PanResponder holds an InteractionManager handle to block long-running JS events from interrupting active gestures.It provides a predictable wrapper of the responder handlers provided by the gesture responder system. For each handler, it provides a new gestureState object alongside the native event object:onPanResponderMove: (event, gestureState) => {}.', 'PanResponder将多个触摸调和为一个手势。 它使单触手势能够适应额外的触摸，并可用于识别简单的多点触控手势。默认情况下，PanResponder持有一个InteractionManager句柄来阻止长时间运行的JS事件中断活动手势。它提供了一个可预测的包装器 响应者处理程序由手势响应者系统提供。 对于每个处理程序，它在本机事件对象旁边提供一个新的gestureState对象：onPanResponderMove：（event，gestureState）=> {}。', '', '', 'PanResponder', 'all'),
  ListCell('29', 'PermissionsAndroid', "This API only works in projects made with react-native init or in those made with Create React Native App which have since ejected. For more information about ejecting, please see the guide on the Create React Native App repository.PermissionsAndroid provides access to Android M's new permissions model. The so-called 'normal' permissions are granted by default when the application is installed as long as they appear in AndroidManifest.xml. However, 'dangerous' permissions require a dialog prompt. You should use this module for those permissions.On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so check and request should always resolve to PermissionsAndroid.RESULTS.GRANTED.If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional rationale argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear.", '此API仅适用于使用react-native init或使用Create React Native App制作的项目，这些项目已经弹出。有关弹出的更多信息，请参阅Create React Native App repository的指南.PersmissionsAndroid提供对Android M新权限模型的访问。默认情况下，只要安装应用程序出现在AndroidManifest.xml中，就会授予所谓的“普通”权限。但是，“危险”权限需要对话框提示。您应该将此模块用于这些权限。在SDK版本23之前的设备上，如果权限出现在清单中，则会自动授予权限，因此检查和请求应始终解析为PermissionsAndroid.RESULTS.GRANTED。如果用户先前已关闭您提示的权限，操作系统会建议您的应用程序显示需要许可的理由。可选的基本原理参数仅在必要时显示对话框提示 - 否则将显示正常的权限提示。', '', '', 'PermissionsAndroid', 'android'),
  ListCell('30', 'PixelRatio', 'PixelRatio class gives access to the device pixel density.', 'PixelRatio类可以访问设备像素密度。', '', '', 'PixelRatio', 'all'),
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
