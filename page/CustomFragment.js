import React from 'react';
import {StyleSheet, View, ScrollView, FlatList, Text, Image} from 'react-native';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      componentList: [
        {name: 'UISlider', page: 'UISlider'},
      ],
    }
  }

  componentDidMount() {
    
  }

  render() {
    let self = this;
    return (
      <View style={styles.container}>
        <FlatList style={styles.content}>
          
        </FlatList>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 44,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
  },


});