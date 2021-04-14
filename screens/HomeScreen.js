import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 36}}>HomeScreen</Text>
      </SafeAreaView>
    );
  }
}

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

export default HomeScreen;