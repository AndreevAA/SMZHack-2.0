import { StatusBar } from 'expo-status-bar';

import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

// Эта хуйня собирается
// export default class App extends Component {
//     render = () => {
//       return (
//         <View>
//           <Text>
//             Блять
//           </Text>
//         </View>
//     );
//   };
// }

// Ля вот я хуй знает что он так на этот класс ругается.
// Ибо если просто так его написать то всё ок, а вот тут что то не так

// Эта хуйня не собирается
// И рот я ебал как по этимм эксепшенам понять что и где происходит
// export class App extends Component {
//   render = () => {
//     return (
//       <SafeAreaView style={styles.container}>
//         <NavigationContainer>
//           <RootNavigator />
//         </NavigationContainer>
//       </SafeAreaView>
//     );
//   };
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

