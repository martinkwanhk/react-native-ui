import React from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class UISlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDragging: true,
      isIdle: true,
      initialDragPosition: 0,
      lastDragPosition: 0,
      initialDragDirection: 0,
      dragDirection: 0,
      currIdx: 0,
      slideLoop: this.props.slideLoop === false ? false : true,
      slideList: [{}],
      slideDuration: !isNaN(parseInt(this.props.slideDuration)) ? this.props.slideDuration : 4000,
      timeout: null,
    }
  }

  componentDidMount() {
    // Init sequence if no loop
    if (this.state.slideLoop) {
      let slideList = [];
      slideList.push(this.props.slideList[this.props.slideList.length - 1]);
      for (let i in this.props.slideList) {
        slideList.push(this.props.slideList[i]);
      }
      slideList.push(this.props.slideList[0]);
      this.setState({
        slideList: slideList,
        currIdx: this.state.slideLoop ? 1 : 0,
      });
    }
    let self = this;
    setTimeout(() => {
      self.startScroll();
    }, 10);
  }

  componentWillUnmount() {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  startScroll() {
    this.flatListRef.scrollToIndex({
      animated: true,
      index: this.state.currIdx,
    });
    this.setAutoScroll();
  }

  setAutoScroll() {
    console.log('auto scroll' + new Date().getTime());
    var self = this;
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
    this.setState({
      isIdle: true,
    });
    slide = () => {
      self.setState({
        timeout: setTimeout(() => {
          if (!self.state.isIdle) {
            self.setState({isIdle: true});
            return;
          }
          self.setState({
            initialDragDirection: -1,
            dragDirection: -1,
          });
          self.onScrollEnd();
        }, self.props.slideDuration ? parseInt(self.props.slideDuration) : 4000),
      });
    }
    slide();
  }

  onScrollBegin() {
    this.setState({
      isDragging: true,
      isIdle: false,
    });
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
  }

  onScrollSlide(e) {
    if (!this.state.isDragging) {
      return;
    }
    if (this.state.initialDragDirection == 0) {
      // First drag
      let x = e.nativeEvent.contentOffset.x;
      let direction = x > this.state.currIdx * screenWidth ? -1 : 1;
      this.setState({
        initialDragPosition: x,
        lastDragPosition: x,
        initialDragDirection: direction,
      });
      return;
    }
    let x = e.nativeEvent.contentOffset.x;
    let direction = x > this.state.lastDragPosition ? -1 : 1;
    this.setState({
      lastDragPosition: x,
      dragDirection: direction,
    });
  }

  onScrollEnd() {
    if (!this || !this.flatListRef) {
      return;
    }
    if (this.dragDirection == 0) {
      return;
    }
    let idx = this.state.currIdx, jumpIdx = false;
    if (this.state.slideLoop) {
      // To left
      if (this.state.initialDragDirection == 1) {
        if (this.state.dragDirection == 1) {
          idx -= 1;
          if (idx <= 0) {
            jumpIdx = this.state.slideList.length - 1;
          }
        }
      }
      // To right
      if (this.state.initialDragDirection == -1) {
        if (this.state.dragDirection == -1) {
          idx += 1;
          if (idx >= this.state.slideList.length - 1) {
            jumpIdx = 1;
          }
        }
      }
    } else {
      // To left
      if (this.state.initialDragDirection == 1) {
        if (this.state.dragDirection == 1) {
          if (idx <= 0) {
            idx = this.props.slideList.length - 1;
          } else {
            idx -= 1;
          }
        }
      }
      // To right
      if (this.state.initialDragDirection == -1) {
        if (this.state.dragDirection == -1) {
          if (idx >= this.props.slideList.length - 1) {
            idx = 0;
          } else {
            idx += 1;
          }
        }
      }
    }
    this.flatListRef.scrollToIndex({
      animated: true,
      index: idx,
    });
    this.setState({
      initialDragDirection: 0,
      dragDirection: 0,
      initialDragPosition: 0,
      lastDragPosition: 0,
      isDragging: false,
      currIdx: jumpIdx !== false ? jumpIdx : idx,
    });
    let self = this;
    setTimeout(() => {
      if (jumpIdx !== false) {
        self.setState({
          currIdx: jumpIdx,
        });
        self.flatListRef.scrollToIndex({
          animated: false,
          index: jumpIdx,
        });
      }
      self.setAutoScroll();
    }, 500);
  }

  onScrollAnimEnd() {
    
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
        <FlatList horizontal 
        data={this.state.slideList} 
        extraData={this.state.slideList} 
        style={{
          width: '100%',
          height: height,
        }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        ref={(ref) => { this.flatListRef = ref; }}
        onScroll={(e) => {
          this.onScrollSlide(e);
        }}
        onScrollBeginDrag={() => {
          this.onScrollBegin();
        }}
        onScrollEndDrag={() => {
          this.onScrollEnd();
        }}
        onMomentumScrollEnd={() => {
          this.onScrollAnimEnd();
        }}
        renderItem={({item, index, separators}) => (
          <Image source={{uri: item.thumbnail}} style={{
            width: screenWidth,
            height: height,
          }} />
        )} />
      </View>
    );
  }

}