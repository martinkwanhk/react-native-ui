import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import UISlider from './../layout/UISlider';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideList: [
        {thumbnail: 'https://brideunionhk.com/image/slider-1.jpg'},
        {thumbnail: 'https://brideunionhk.com/image/slider-2.jpg'},
        {thumbnail: 'https://brideunionhk.com/image/slider-3.jpg'},
      ],
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <UISlider height={240} slideList={this.slideList} />
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