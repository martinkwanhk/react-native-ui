import React from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDragging: true,
    }
  }

  componentDidMount() {
    
  }

  onScrollSlide(e) {
    console.log(e);
  }

  onScrollBegin() {
    this.state.isDragging = true;
  }

  onScrollEnd() {
    this.state.isDragging = false;
  }

  render() {
    let self = this;
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: this.props.height ? parseInt(this.props.height) : 240,
      }}>
        <FlatList horizontal data={this.props.slideList} style={{
          width: '100%',
          height: '100%',
        }} onScroll={(e) => {
          this.onScrollSlide(e);
        }} onScrollBeginDrag={() => {
          this.onScrollBegin();
        }} onScrollEndDrag={() => {
          this.onScrollEnd();
        }} renderItem={({item, index, separators}) => (
          <Image source={{uri: item.thumbnail}} style={{
            width: screenWidth,
            height: '100%',
          }} />
        )} />
      </View>
    );
  }

}