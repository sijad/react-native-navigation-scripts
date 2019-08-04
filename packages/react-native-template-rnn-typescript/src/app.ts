import { Navigation } from 'react-native-navigation';
import { registerScreens } from './commons';
import { defaultStack } from './layouts';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  Navigation.setRoot({
    root: defaultStack,
  });
});
