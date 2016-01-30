import React, {
  AppRegistry, StyleSheet, Text, View, Animated, Component, PanResponder,
}
from 'react-native';
import CardSwiperContainer from './containers/CardSwiperContainer';
import SimpleApi from './implementations/BasicSimplifiedImplementation/SimpleApi'
import SimpleView from './implementations/BasicSimplifiedImplementation/SimpleView'
import CageView from './implementations/Nicklomentation/CageView'
import CageApi from './implementations/Nicklomentation/CageApi'

class mainView extends Component {
  constructor(props) {
    super(props);
    this.cardApi = new SimpleApi()
  }

  render() {
    return (
      <View style={{flex:1}}>
				<CardSwiperContainer  acceptAnimation={false} rejectAnimation={false} acceptText={"YEH"} rejectText={"MEH"}
					onReject={this.cardApi.onReject} onAccept={this.cardApi.onAccept} 
					getNextCardDataSource={this.cardApi.goToNext.bind(this.cardApi)}>
					<SimpleView/>
				</CardSwiperContainer>
			</View>
    );
  }
}
AppRegistry.registerComponent('ReactNativeCardSwiper', () => mainView);