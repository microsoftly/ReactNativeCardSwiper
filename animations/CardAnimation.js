import {
    Animated
}
from 'react-native'

export function cardAnimation(translateX, translateY, scale) {
    const rotate = translateX.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: ["-30deg", "0deg", "30deg"]
    });
    const opacity = translateX.interpolate({
        inputRange: [-250, 0, 250],
        outputRange: [0.20, 1, 0.20]
    })

    const cardAnimationStyle = {
        transform: [{
            translateX
        }, {
            translateY
        }, {
            rotate
        }, {
            scale
        }],
        opacity
    };
    return cardAnimationStyle;
}

export function cardOffScreenAnimation(pan, vx, vy, onFinish) {
    Animated.decay(pan, {
        velocity: {
            x: vx,
            y: vy
        },
        deceleration: 0.98
    }).start(onFinish);
}

export function cardReturnToOriginAnimation(pan) {
    Animated.spring(pan, {
        toValue: {
            x: 0,
            y: 0
        },
        friction: 4
    }).start()
}