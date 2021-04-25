import { StatusBar } from 'expo-status-bar';

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/NewsNavigator';

import {OnBoardingNavigator} from './navigators/OnBoardingNavigator'

import {FooterTabs} from './navigators/FooterTabs';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <RootNavigator /> */}
        {/* <FooterTabs /> */}
      <NavigationContainer>
        <OnBoardingNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

