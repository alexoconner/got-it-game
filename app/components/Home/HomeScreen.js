import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.startBtn}>
        <Text style={styles.startBtnText}>Start</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  startBtn: {
    backgroundColor: '#000',
  },
  startBtnText: {
    fontSize: 30,
    color: '#fff'
  }
});
