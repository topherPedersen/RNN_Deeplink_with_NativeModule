import { Navigation } from "react-native-navigation";

import HomeScreen from './screens/HomeScreen';
HomeScreen.options = {
    topBar: {
      title: {
        text: 'RNN Deeplink with NativeModule',
        color: 'white'
      },
      background: {
        color: '#4d089a'
      }
    }
  }

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Home'
              }
            }
          ]
        }
      }
    });
  });