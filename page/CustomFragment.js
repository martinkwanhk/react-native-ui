import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';

export default class CustomFragment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      componentList: [
        {name: 'UISlider', page: 'UISlider'},
        {name: 'UISlider', page: 'UISlider'},
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
          <TouchableOpacity navigation={this.props.navigation} onPress={() => this.props.navigation.navigate(item.page, {})}>
            <Text style={styles.item}>{item.name}</Text>
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
  },
  item: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: '#5d5d5d',
    fontSize: 14,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },

});