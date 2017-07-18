import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

class MemorizeView extends React.Component {

  static propTypes = {
    styles: PropTypes.object
  }

  state = {
    boxLeft: new Animated.Value(boxAnimationValues.boxLeft.from),
    boxRight: new Animated.Value(boxAnimationValues.boxRight.from),
  }

  componentDidMount() {
    Animated.timing(
      this.state.boxLeft,
      {
        toValue: boxAnimationValues.boxLeft.to,
        duration: 500
      }
    ).start();
    Animated.timing(
      this.state.boxRight,
      {
        toValue: boxAnimationValues.boxRight.to,
        duration: 500
      }
    ).start();
  }

  render() {
    // merging inherited and component styles
    const styles = Object.assign(boxStyles, this.props.styles);
    let { boxLeft, boxRight } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, boxStyles.boxOne]}>
          <Text style={styles.boxSymbol}>O</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { left: boxLeft }]}>
          <Text style={styles.boxSymbol}>X</Text>
        </Animated.View>
        <Animated.View style={[styles.box, { right: boxRight }]}>
          <Text style={styles.boxSymbol}>I</Text>
        </Animated.View>
        <Animated.View style={[styles.box, styles.boxFour]}>
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
  boxTop: {
    from: 280 + box.size + box.margin,
    to: box.size + box.margin
  },
  boxRight: {
    from: -(280 + box.size + box.margin),
    to: -(box.size + box.margin)
  },
  boxLeft: {
    from: -(280 + box.size + box.margin),
    to: -(box.size + box.margin)
  },
  boxBottom: {
    from: -(280 + box.size + box.margin),
    to: -(box.size + box.margin)
  },
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

export default MemorizeView;
