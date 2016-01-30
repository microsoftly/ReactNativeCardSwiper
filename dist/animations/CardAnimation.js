"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cardAnimation = cardAnimation;
exports.cardOffScreenAnimation = cardOffScreenAnimation;
exports.cardReturnToOriginAnimation = cardReturnToOriginAnimation;

var _reactNative = require("react-native");

function cardAnimation(translateX, translateY, scale) {
    var rotate = translateX.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: ["-30deg", "0deg", "30deg"]
    });
    var opacity = translateX.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: [0.20, 1, 0.20]
    });

    var cardAnimationStyle = {
        transform: [{
            translateX: translateX
        }, {
            translateY: translateY
        }, {
            rotate: rotate
        }, {
            scale: scale
        }],
        opacity: opacity
    };
    return cardAnimationStyle;
}

function cardOffScreenAnimation(pan, vx, vy, onFinish) {
    _reactNative.Animated.decay(pan, {
        velocity: {
            x: vx,
            y: vy
        },
        deceleration: 0.98
    }).start(onFinish);
}

function cardReturnToOriginAnimation(pan) {
    _reactNative.Animated.spring(pan, {
        toValue: {
            x: 0,
            y: 0
        },
        friction: 4
    }).start();
}