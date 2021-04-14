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
};
Navigation.registerComponent('Home', () => HomeScreen);

import FooScreen from './screens/FooScreen';
FooScreen.options = {
  topBar: {
    title: {
      text: 'Foo',
      color: 'white'
    },
    background: {
      color: 'red'
    }
  }
};
Navigation.registerComponent('Foo', () => FooScreen);

import BarScreen from './screens/BarScreen';
BarScreen.options = {
  topBar: {
    title: {
      text: 'Bar',
      color: 'white'
    },
    background: {
      color: 'green'
    }
  }
};
Navigation.registerComponent('Bar', () => BarScreen);

import BazScreen from './screens/BazScreen';
BazScreen.options = {
  topBar: {
    title: {
      text: 'Baz',
      color: 'white'
    },
    background: {
      color: 'blue'
    }
  }
};
Navigation.registerComponent('Baz', () => BazScreen);

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