import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/RootNavigator';

export class App extends Component {
  render = () => {
  return (
    <SafeAreaView>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </SafeAreaView>
  );
  };
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
});
