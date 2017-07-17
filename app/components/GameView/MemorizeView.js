import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class MemorizeView extends React.Component {
  render() {
    const { styles } = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.boxOne]}>
          <Text style={styles.boxSymbol}>O</Text>
        </View>
        <View style={[styles.box, styles.boxTwo]}>
          <Text style={styles.boxSymbol}>X</Text>
        </View>
        <View style={[styles.box, styles.boxThree]}>
          <Text style={styles.boxSymbol}>I</Text>
        </View>
        <View style={[styles.box, styles.boxFour]}>
          <Text style={styles.boxSymbol}>-</Text>
        </View>
      </View>
    );
  }
}

MemorizeView.propTypes = {
  styles: PropTypes.object
};

export default MemorizeView;
