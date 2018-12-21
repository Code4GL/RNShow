/*
 * @Author: Code4GL
 * @Date: 2018-12-19 16:11:55
 * @Last Modified by: Code4GL
 * @Last Modified time: 2018-12-21 10:00:26
 */

'use strict';

import ActivityIndicator from '../../containers/components/example/ActivityIndicator';

function DetailCell (key, name, exampleComponent) {
  return ({
    key,
    name,
    exampleComponent
  });
}
const ComponentDetails = [
  DetailCell('01', 'ActivityIndicator', ActivityIndicator)
];

export default ComponentDetails;
