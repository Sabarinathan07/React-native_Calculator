/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
export {default as calcButton } from './components/CalcButton';


AppRegistry.registerComponent(appName, () => App);
