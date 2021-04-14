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
} from 'react-native';
import { Navigation } from 'react-native-navigation';

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
      </SafeAreaView>
    );
  }
}

export default HomeScreen;