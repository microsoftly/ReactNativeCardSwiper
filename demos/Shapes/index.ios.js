import React, {
  AppRegistry, StyleSheet, Text, View, Component,
}
from 'react-native';
import CardSwiper from './CardSwiper';
import ShapesView from './demos/Shapes/ShapesView'
import ShapesApi from './demos/Shapes/ShapesApi'

class mainView extends Component {
  constructor(props) {
    super(props);
    this.cardApi = new ShapesApi()
  }

  render() {
    return (
      <View style={{flex:1}}>
        <CardSwiper  acceptAnimation={true} rejectAnimation={true} acceptText={"YEH"} rejectText={"MEH"}
            onReject={this.cardApi.onReject} onAccept={this.cardApi.onAccept} 
            getNextCardDataSource={this.cardApi.goToNext.bind(this.cardApi)}>
          <ShapesView/>
        </CardSwiper>
      </View>
    );
  }
}

AppRegistry.registerComponent('CardSwiper', () => mainView);