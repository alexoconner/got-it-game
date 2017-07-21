import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default function HomeView() {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.startBtn}>Start</TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  startBtn: {
    backgroundColor: '#fff',
    fontSize: 30,
    color: '#000'
  }
});
