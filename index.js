/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from "./App";
Navigation.registerComponent('com.rnn_deeplink_with_nativemodule.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.rnn_deeplink_with_nativemodule.WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});

