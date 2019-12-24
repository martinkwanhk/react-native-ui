import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';

import UISlider from './../layout/UISlider';

export default class UISliderPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideList: [
        {thumbnail: 'https://onmygrad.com/image/home-banner-1.jpg'},
        {thumbnail: 'https://onmygrad.com/image/home-banner-2.jpg'},
        {thumbnail: 'https://onmygrad.com/image/home-banner-3.jpg'},
        {thumbnail: 'https://onmygrad.com/image/home-banner-4.jpg'},
      ],
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UISlider 
          style={styles.slider} 
          height={240} 
          slideList={this.state.slideList}
          slideLoop={true} />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

});