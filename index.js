/**
 * @format
 */

import HomeScreen from './screens/HomeScreen';

import { Navigation } from "react-native-navigation";

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