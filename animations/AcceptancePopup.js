function getOpacityInputOutputRange(isAcceptView) {
    return isAcceptView ? {
        inputRange: [0, 150],
        outputRange: [0, 1]
    } : {
        inputRange: [-150, 0],
        outputRange: [1, 0]
    }
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
    }
}

export function CreateAcceptAnimation(translateX) {
    const opacity = translateX.interpolate(getOpacityInputOutputRange(true));
    const scale = translateX.interpolate(getScaleInputOutputRange(true));

    return {
        transform: [{
            scale
        }],
        opacity
    };
}

export function CreateRejectAnimation(translateX) {
    const opacity = translateX.interpolate(getOpacityInputOutputRange(false));
    const scale = translateX.interpolate(getScaleInputOutputRange(false));

    return {
        transform: [{
            scale
        }],
        opacity
    };
}