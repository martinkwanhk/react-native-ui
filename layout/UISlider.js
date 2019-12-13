import React from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class UISlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDragging: true,
      isIdle: true,
      dragDirection: 0,
      currIdx: 0,
      slideDuration: !isNaN(parseInt(this.props.slideDuration)) ? this.props.slideDuration : 4000,
      timeout: null,
    }
  }

  componentDidMount() {
    this.flatListRef.scrollToIndex({
      animated: true,
      index: this.state.currIdx,
    });
    this.startAutoScroll();
  }

  startAutoScroll() {
    let self = this;
    if (!this.state.timeout) {
      this.setState({
        timeout: setTimeout(function() {
          onScrollEnd();
        }, self.slideDuration),
      });
    }
  }

  onScrollSlide(e) {
    console.log(e.nativeEvent.contentOffset);
    this.setState({dragDirection: e.nativeEvent.contentOffset > 0 ? -1 : 1});
  }

  onScrollBegin() {
    this.setState({
      isDragging: true,
      isIdle: false,
    });
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
      this.setState({
        timeout: null,
      });
    }
  }

  onScrollEnd() {
    let idx = this.state.currIdx;
    if (this.state.dragDirection == 1) {
      if (idx >= this.props.slideList.length - 1) {
        idx = 0;
      } else {
        idx += 1;
      }
    } else {
      if (idx <= 0) {
        idx = this.props.slideList.length - 1;
      } else {
        idx -= 1;
      }
    }
    this.flatListRef.scrollToIndex({
      animated: true,
      index: this.state.currIdx,
    });
    this.setState({
      dragDirection: 0,
      isDragging: false,
      isIdle: true,
      currIdx: idx,
    });
    this.startAutoScroll();
  }

  render() {
    let self = this;
    let height = this.props.height ? parseInt(this.props.height) : 240;
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: height,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
      }}>
        <FlatList horizontal data={this.props.slideList} style={{
          width: '100%',
          height: height,
        }}
        ref={(ref) => { this.flatListRef = ref; }}
        onScroll={(e) => {
          this.onScrollSlide(e);
        }} onScrollBeginDrag={() => {
          this.onScrollBegin();
        }} onScrollEndDrag={() => {
          this.onScrollEnd();
        }} renderItem={({item, index, separators}) => (
          <Image source={{uri: item.thumbnail}} style={{
            width: screenWidth,
            height: height,
          }} />
        )} />
      </View>
    );
  }

}