import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './app/components/Home/index';
import { GameScreen } from './app/components/Game/index';

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen }
  },
  {
    headerMode: 'none'
  }
);

export default App;

// export default class App extends React.Component {
//   render() {
//     return (
//       // <View style={styles.container}>
//         <HomeScreen />
//       // </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
