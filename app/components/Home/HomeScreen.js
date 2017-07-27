import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class HomeScreen extends React.Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigate('Game')} style={styles.startBtn}>
          <Text style={styles.startBtnText}>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

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
    padding: 20
  },
  startBtnText: {
    fontSize: 30,
    color: '#fff'
  }
});

export default HomeScreen;
