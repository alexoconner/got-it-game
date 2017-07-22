import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MemorizeScreen from './MemorizeScreen';

class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemorizeScreen styles={styles} />
      </View>
    );
  }
}

const box = {
  size: 100,
  margin: 20
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  box: {
    position: 'absolute',
    width: box.size,
    height: box.size,
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSymbol: {
    color: '#fff',
    fontSize: 50
  }
});

export default GameScreen;
