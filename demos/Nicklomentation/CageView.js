import React, {
    Component, View, Image, Text
}
from 'react-native'

class CageView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Image style={{flex:2}} source={{uri:this.props.dataSource.cage}}/>
                <View style={{flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}
                    backgroundColor={this.props.dataSource.color}>
                    <View stlye={{flex:1, flexDirection:'column', alignItems:'center'}}>
                        <Text style={{flex:1, fontSize:35, backgroundColor:'yellow' }}>{this.props.dataSource.quote}</Text> 
                    </View>
                </View> 
            </View>
        )
    }
}

export default CageView