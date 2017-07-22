import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';

class MemorizeScreen extends React.Component {

  static propTypes = {
    styles: PropTypes.object
  }

  state = {
    boxAni: new Animated.Value(boxAnimationValues.from),
    boxAniNegative: new Animated.Value(-boxAnimationValues.from)
  }

  componentDidMount() {
    Animated.timing(
      this.state.boxAni,
      {
        toValue: boxAnimationValues.to,
        duration: 500,
        easing: Easing.bounce
      }
    ).start();
    Animated.timing(
      this.state.boxAniNegative,
      {
        toValue: -boxAnimationValues.to,
        duration: 500,
        easing: Easing.bounce
      }
    ).start();
  }

  render() {
    // merging inherited and component styles
    const styles = Object.assign(boxStyles, this.props.styles);
    let { boxAni, boxAniNegative } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, { transform: [{ translateY: boxAniNegative}] }]}>
          <Text style={styles.boxSymbol}>O</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: boxAniNegative }]}>
          <Text style={styles.boxSymbol}>X</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { right: boxAniNegative }]}>
          <Text style={styles.boxSymbol}>I</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { transform: [{ translateY: boxAni}] }]}>
          <Text style={styles.boxSymbol}>-</Text>
        </Animated.View>
      </View>
    );
  }
}

const box = {
  size: 100,
  margin: 20
}

const boxAnimationValues = {
  from: (280 + box.size + box.margin),
  to: (box.size + box.margin)
}

const boxStyles = StyleSheet.create({
  boxOne: {
    transform: [
      { translateY: -(box.size + box.margin) }
    ],
  },
  boxTwo: {
    left: -(280 + box.size + box.margin / 2),
  },
  boxThree: {
    right: -(box.size + box.margin / 2),
  },
  boxFour: {
    transform: [
      { translateY: box.size + box.margin }
    ],
  },
})

export default MemorizeScreen;
