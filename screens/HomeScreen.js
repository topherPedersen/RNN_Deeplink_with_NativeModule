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
} from 'react-native';
import { Navigation } from 'react-native-navigation';

const { MyNativeModule } = NativeModules;

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
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
          onPress={() => MyNativeModule.sayHello() } />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;