import React from 'react';
import {StyleSheet, SafeAreaView, FlatList, Image} from 'react-native';

//import UIEditor from './../layout/UIEditor';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
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