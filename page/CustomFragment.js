import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      componentList: [
        {name: 'UISlider', page: 'UISlider'},
        {name: 'UIEditor', page: 'UIEditor'},
      ],
    }
  }

  componentDidMount() {
    
  }

  render() {
    let self = this;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.content} data={this.state.componentList} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} navigation={this.props.navigation} onPress={() => {
            this.props.navigation.navigate(item.page, {});
          }}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )} />
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  item: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  itemText: {
    color: '#5d5d5d',
    fontSize: 14,
    textAlign: 'left',
  },

});