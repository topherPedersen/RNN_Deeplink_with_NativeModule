import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules,
  Linking,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const { MyNativeModule } = NativeModules;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleDeeplink();
  }

  async handleDeeplink() {
    const deeplinkURL = await Linking.getInitialURL();
    if (deeplinkURL == 'http://www.rnn.com/deeplink') {
      Navigation.push(this.props.componentId, {component: {name: 'Foo'}})
    }
  }

  render() {
    return(
      <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontSize: 36}}>HomeScreen</Text>
        <Button 
          title='GOTO FOO'
          color='purple'
          onPress={() => Navigation.push(this.props.componentId, {component: {name: 'Foo'}})} />
        <Button 
          title='LAUNCH NATIVE ACTIVITY'
          color='purple'
          onPress={() => MyNativeModule.launchNativeActivity() } />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;