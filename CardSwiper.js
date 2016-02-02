import React, {
  AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder,
}
from 'react-native';

import clamp from 'clamp';

import {
  SWIPE_THRESHOLD
}
from './config/constants.js'

import {
  cardAnimation, cardReturnToOriginAnimation, cardOffScreenAnimation
}
from './animations/CardAnimation'

import {
  CreateAcceptAnimation, CreateRejectAnimation
}
from './animations/AcceptancePopup';

class CardSwiper extends Component {
  static defaultProps = {
    AcceptAnimation: true,
    RejectAnimation: true,
    acceptText: 'Yep',
    rejectText: 'Nope',
    onReject: () => {},
    onAccept: () => {},
    fadeWithPan: true,
  };

  static propTypes = {
    acceptAnimation: React.PropTypes.bool,
    rejectAnimation: React.PropTypes.bool,
    acceptText: React.PropTypes.string,
    rejectText: React.PropTypes.string,
    onReject: React.PropTypes.func,
    onAccept: React.PropTypes.func,
    getNextCardDataSource: React.PropTypes.func.isRequired,
    fadeWithPan: React.PropTypes.bool,
    children: React.PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
      enter: new Animated.Value(0.5),
      dataSource: this.props.getNextCardDataSource(),
    }
  }

  _getNextCard() {
    this.setState({
      dataSource: this.props.getNextCardDataSource()
    });
  }

  componentDidMount() {
    this._animateEntrance();
  }

  _animateEntrance() {
    Animated.spring(
      this.state.enter, {
        toValue: 1,
        friction: 8
      }
    ).start();
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        });
        this.state.pan.setValue({
          x: 0,
          y: 0
        });
      },

      onPanResponderMove: Animated.event([
        null, {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        },
      ]),

      onPanResponderRelease: (e, {
        vx, vy
      }) => {
        this.state.pan.flattenOffset();
        const velocity = vx >= 0 ? clamp(vx, 3, 5) : clamp(vx * -1, 3, 5) * -1;

        //check too ensure that the x position is past the swipe threshold
        //and that the direction of the velocity matches the direction of the x
        //value relative to the origin.
        if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD &&
          this.state.pan.x._value * velocity >= 0) {

          cardOffScreenAnimation(this.state.pan, velocity, vy, () => velocity > 0 ? this._onAccept() : this._onReject())
        } else {
          cardReturnToOriginAnimation(this.state.pan);
        }
      }
    });
  }

  _onReject() {
    if (this.props.onReject) this.props.onReject(this.state.dataSource);
    this._resetState(this)
  }

  _onAccept() {
    if (this.props.onAccept) this.props.onAccept(this.state.dataSource);
    this._resetState(this)
  }

  _resetState() {
    this._getNextCard();
    this.state.pan.setValue({
      x: 0,
      y: 0
    });
    this.state.enter.setValue(0);
    this._animateEntrance();
  }

  _renderAccept() {
    if (!this.props.acceptAnimation) return

    let {
      pan, enter
    } = this.state;
    let animatedYesStyles = CreateAcceptAnimation(pan.x);

    return (
      <Animated.View style={[styles.accept, animatedYesStyles]}>
          <Text style={styles.acceptText}>{this.props.acceptText}</Text>
      </Animated.View>
    );
  }

  _renderReject() {
    if (!this.props.rejectAnimation) return

    let {
      pan
    } = this.state;
    let animatedNoStyles = CreateRejectAnimation(pan.x);

    return (
      <Animated.View style={[styles.reject, animatedNoStyles]}>
          <Text style={styles.rejectText}>{this.props.rejectText}</Text>
      </Animated.View>
    );
  }

  _renderCard() {
    let {
      pan, enter
    } = this.state;
    const child = this.props.children

    var childView = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        dataSource: this.state.dataSource
      });
    });

    let animatedCardStyles = cardAnimation(pan.x, pan.y, enter);
    return (
      <Animated.View style={[animatedCardStyles]} {...this._panResponder.panHandlers}>
          {childView}
      </Animated.View>
    );
  }

  render() {
    let AcceptView = this._renderAccept();
    let RejectView = this._renderReject();
    let CardView = this._renderCard();

    return (
      <View style={styles.container}>
          {this._renderAccept()}
          {this._renderReject()}
          {this._renderCard()}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  accept: {
    borderColor: 'green',
    borderWidth: 2,
    position: 'absolute',
    padding: 20,
    bottom: 20,
    borderRadius: 5,
    right: 20,
  },
  acceptText: {
    fontSize: 16,
    color: 'green',
  },
  reject: {
    borderColor: 'red',
    borderWidth: 2,
    position: 'absolute',
    bottom: 20,
    padding: 20,
    borderRadius: 5,
    left: 20,
  },
  rejectText: {
    fontSize: 16,
    color: 'red',
  }
});

module.exports = CardSwiper;