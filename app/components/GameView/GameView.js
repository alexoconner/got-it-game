import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import MemorizeView from './MemorizeView';

class GameView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemorizeView styles={styles} />
      </View>
    );
  }
}

const boxSize = 100;
const boxMargin = 20;
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
    width: boxSize,
    height: boxSize,
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxOne: {
    transform: [
      { translateY: -(boxSize + boxMargin) }
    ],
  },
  boxTwo: {
    left: -(boxSize + boxMargin / 2),
  },
  boxThree: {
    right: -(boxSize + boxMargin / 2),
  },
  boxFour: {
    transform: [
      { translateY: boxSize + boxMargin }
    ],
  },
  boxSymbol: {
    color: '#fff',
    fontSize: 50
  }
});

export default GameView;
