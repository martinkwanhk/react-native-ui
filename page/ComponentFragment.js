import React from 'react';
import {StyleSheet, View, ScrollView, FlatList, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default class ComponentFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    
  }

  render() {
    let self = this;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          
        </ScrollView>
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