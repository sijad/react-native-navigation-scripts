import { Navigation } from 'react-native-navigation';
import * as screens from '../screens';

export function registerScreens() {
  Navigation.registerComponent('Other', () => screens.Other);
  Navigation.registerComponent('Home', () => screens.Home);
}
