import { Navigation } from 'react-native-navigation';
import { setDefaultOptions, registerScreens } from './commons';
import { defaultStack } from './layouts';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();
  Navigation.setRoot({
    root: defaultStack,
  });
});
