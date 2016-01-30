'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateAcceptAnimation = CreateAcceptAnimation;
exports.CreateRejectAnimation = CreateRejectAnimation;
function getOpacityInputOutputRange(isAcceptView) {
    return isAcceptView ? {
        inputRange: [0, 150],
        outputRange: [0, 1]
    } : {
        inputRange: [-150, 0],
        outputRange: [1, 0]
    };
}

function getScaleInputOutputRange(isAcceptView) {
    return isAcceptView ? {
        extrapolate: 'clamp',
        inputRange: [0, 150],
        outputRange: [0.5, 1]
    } : {
        extrapolate: 'clamp',
        inputRange: [-150, 0],
        outputRange: [1, 0.5]
    };
}

function CreateAcceptAnimation(translateX) {
    var opacity = translateX.interpolate(getOpacityInputOutputRange(true));
    var scale = translateX.interpolate(getScaleInputOutputRange(true));

    return {
        transform: [{
            scale: scale
        }],
        opacity: opacity
    };
}

function CreateRejectAnimation(translateX) {
    var opacity = translateX.interpolate(getOpacityInputOutputRange(false));
    var scale = translateX.interpolate(getScaleInputOutputRange(false));

    return {
        transform: [{
            scale: scale
        }],
        opacity: opacity
    };
}