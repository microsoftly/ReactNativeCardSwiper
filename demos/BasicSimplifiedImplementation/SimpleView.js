import React, {
    Component, View, Text
}
from 'react-native';

class SimpleView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}} backgroundColor={this.props.dataSource}>
                <Text style={{fontSize:30,flex:1,justifyContent:'center',alignSelf:'center'}}> MAKE YOURE OWN CARD HERE</Text>
            </View>
        )
    }
}

export default SimpleView;