import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
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