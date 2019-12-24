import React from 'react';
import {StyleSheet, KeyboardAvoidingView, View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';

//import UIEditor from './../layout/UIEditor';

export default class UIEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  executeCommand(cmd) {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>

        </View>
        
        <View style={styles.editable}>

        </View>

        <ScrollView style={styles.menu} horizontal={true}>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },

  editable: {
    flex: 1,
    width: '100%',
  },

  menu: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderTopColor: '#CCC',
    borderTopWidth: 1,
  },
  menuBtn: {
    
  },
  menuBtnImg: {

  },
  menuDivider: {
    
  },

});