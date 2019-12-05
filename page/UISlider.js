import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';

import UISlider from './../layout/UISlider';

export default class CustomFragment extends React.Component {

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
        <UISlider style={styles.slider} height={240} slideList={this.state.slideList} />
        <FlatList horizontal data={this.state.slideList} style={{
          width: '100%',
          height: 240,
        }} onScroll={(e) => {
          
        }} renderItem={({item, index, separators}) => (
          <Image source={{uri: item.thumbnail}} style={{
            width: 300,
            height: 240,
          }} />
        )} />
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