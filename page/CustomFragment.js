import React from 'react';
import {StyleSheet, SafeAreaView, TouchableOpacity, FlatList, Text} from 'react-native';

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
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.content} data={this.state.componentList} renderItem={({item, index, separators}) => {
          return (
            <TouchableOpacity navigation={this.props.navigation} onPress={() => this.props.navigation.navigate('UISlider', {})}>
              <Text style={styles.item}>item.name</Text>
            </TouchableOpacity>
          )
        }} />
      </SafeAreaView>
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
  item: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#5d5d5d',
    fontSize: 14,
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  }

});