import { Navigation } from 'react-native-navigation';
import { setDefaultOptions, registerScreens } from './commons';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens();
  setDefaultOptions();

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
