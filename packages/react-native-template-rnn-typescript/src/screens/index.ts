import { Navigation } from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Other', () => require('./Other').Other);
  Navigation.registerComponent('Home', () => require('./Home').Home);
}
