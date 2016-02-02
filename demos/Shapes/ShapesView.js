import React, {
    Component, View, Text, StyleSheet
}
from 'react-native';

class SimpleView extends Component {
    constructor(props) {
        super(props);

    }

    _renderTraingle() {
        return <View style={styles.triangle}/>
    }

    _renderPacman() {
        return <View style={styles.pacman}/>
    }

    _renderCircle() {
        return <View style={styles.circle}/>
    }

    _renderYingYang() {
        return (
            <View>
                <View style={styles.yinyangMain}/>
                <View style={styles.yinyangBefore}/>
                <View style={styles.yinyangAfter}/> 
             </View>)
    }

    _renderBadgeRibbon() {
        return (
            <View style={styles.badgeRibbon}>
                    <View style={styles.badgeRibbonCircle}/>
                    <View style={styles.badgeRibbonNeg140}/>
                    <View style={styles.badgeRibbon140}/>
                </View>
        );
    }

    _renderFacebook() {
        return (
            <View style={styles.facebook}> 
                <View style={styles.facebookMain}>
                    <View style={styles.facebookCurve} />  
                    <View style={styles.facebookBefore} />
                    <View style={styles.facebookAfter} />
                    <View style={styles.facebookRedCover} />    
                </View> 
            </View>
        );
    }

    render() {
        switch (this.props.dataSource.shape) {
        case "pacman":
            return this._renderPacman()
        case "triangle":
            return this._renderTraingle();
        case "circle":
            return this._renderCircle();
        case "yingYang":
            return this._renderYingYang();
        case "badgeRibbon":
            return this._renderBadgeRibbon();
        case "fb":
            return this._renderFacebook();
        }
    }

}

let styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'red'
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'purple'
    },
    pacman: {
        width: 0,
        height: 0,
        borderTopWidth: 60,
        borderTopColor: 'red',
        borderLeftColor: 'red',
        borderLeftWidth: 60,
        borderRightColor: 'transparent',
        borderRightWidth: 60,
        borderBottomColor: 'red',
        borderBottomWidth: 60,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60
    },
    yinyangMain: {
        width: 100,
        height: 100,
        borderColor: 'red',
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 50,
        borderRightWidth: 2,
        borderRadius: 50
    },
    yinyangBefore: {
        position: 'absolute',
        top: 24,
        left: 0,
        borderColor: 'red',
        borderWidth: 24,
        borderRadius: 30,
    },
    yinyangAfter: {
        position: 'absolute',
        top: 24,
        right: 2,
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 25,
        borderRadius: 30,
    },
    badgeRibbonCircle: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 50
    },
    badgeRibbon140: {
        backgroundColor: 'transparent',
        borderBottomWidth: 70,
        borderBottomColor: 'red',
        borderLeftWidth: 40,
        borderLeftColor: 'transparent',
        borderRightWidth: 40,
        borderRightColor: 'transparent',
        position: 'absolute',
        top: 70,
        right: -10,
        transform: [{
            rotate: '140deg'
        }]
    },
    badgeRibbonNeg140: {
        backgroundColor: 'transparent',
        borderBottomWidth: 70,
        borderBottomColor: 'red',
        borderLeftWidth: 40,
        borderLeftColor: 'transparent',
        borderRightWidth: 40,
        borderRightColor: 'transparent',
        position: 'absolute',
        top: 70,
        left: -10,
        transform: [{
            rotate: '-140deg'
        }]
    },
    facebook: {
        width: 100,
        height: 110,
    },
    facebookMain: {
        backgroundColor: 'blue',
        width: 100,
        height: 110,
        borderRadius: 5,
        borderColor: 'blue',
        borderTopWidth: 15,
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderBottomWidth: 0,
        overflow: 'hidden'
    },
    facebookRedCover: {
        width: 10,
        height: 20,
        backgroundColor: 'blue',
        position: 'absolute',
        right: 0,
        top: 5
    },
    facebookCurve: {
        width: 50,
        borderWidth: 20,
        borderTopWidth: 20,
        borderTopColor: 'white',
        borderBottomColor: 'transparent',
        borderLeftColor: 'white',
        borderRightColor: 'transparent',
        borderRadius: 20,
        position: 'absolute',
        right: -8,
        top: 5
    },
    facebookBefore: {
        position: 'absolute',
        backgroundColor: 'white',
        width: 20,
        height: 70,
        bottom: 0,
        right: 22,
    },
    facebookAfter: {
        position: 'absolute',
        width: 55,
        top: 50,
        height: 20,
        backgroundColor: 'white',
        right: 5
    }
});


export default SimpleView;