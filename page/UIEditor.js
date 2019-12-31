import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import UIEditor from './../layout/UIEditor';

export default class UIEditorPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text>Some title here</Text>
        </View>

        <UIEditor 
          style={styles.editor}
          uploadImage={(base64, callback) => {
            let data = {
              key: '99Consulting',
              ext: 'jpg',
              base64: 'data:image/jpeg;base64,' + base64,
            };
            fetch('https://api.onmygrad.com/corn/upload-image', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
              body: Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&'),
            })
            .then((response) => response.json())
            .then((responseJson) => {
              callback(responseJson.success == 1 ? true : false, responseJson.content);
            })
            .catch((error) => {
              console.error(error);
              callback(false);
            });
          }} />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },

  editor: {
    flex: 1,
    width: '100%',
  },

});