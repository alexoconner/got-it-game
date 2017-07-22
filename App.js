import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import { HomeView } from './app/components/Home/index';
import { GameView } from './app/components/Game/index';

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
        <HomeView />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
