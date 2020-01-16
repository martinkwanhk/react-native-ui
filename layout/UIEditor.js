import React from 'react';
import {StyleSheet, KeyboardAvoidingView, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import ImagePicker from 'react-native-image-picker';

const htmlFile = require('./../asset/editor-rn.html');

export default class UIEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tempImageBase64: false,
    }
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  executeCommand(cmd) {
    let self = this;
    switch (cmd) {
      case 'insertimage':
        ImagePicker.showImagePicker({
          title: 'Insert Image',
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
          maxWidth: 800,
          maxHeight: 800,
          quality: 1,
          allowsEditing: true,
        }, (response) => {
          //console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            self.props.uploadImage(response.data, (s, src) => {
              if (s) {
                self.webref.postMessage(JSON.stringify({
                  action: 'command',
                  command: 'insertimage',
                  src: src,
                }));
              } else {
                alert('Fail to upload image, please retry');
              }
            });
          }
        });
        break;
      default:
        this.webref.postMessage(JSON.stringify({
          action: 'command',
          command: cmd,
        }));
        //this.webref.injectJavaScript('setTimeout(() => {execCommand(' + cmd + ');}, 100); true;');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={60}>
        <View style={styles.editable}>
          <WebView 
            ref={r => (this.webref = r)}
            source={htmlFile}
            originWhitelist={['*']}
            automaticallyAdjustContentInsets={false}
            scrollEnabled={true}
            onMessage={(msg) => {

            }}
            style={styles.editableWeb} />
        </View>

        <View style={styles.menu}>
          <ScrollView style={styles.menuScroll} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('bold');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-bold.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('italic');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-italic.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('underline');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-underline.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('strikeThrough');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-strike.png')} />
            </TouchableOpacity>
            <View style={styles.menuDivider}></View>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('undo');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-undo.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('redo');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-redo.png')} />
            </TouchableOpacity>
            <View style={styles.menuDivider}></View>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('createlink');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-link.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('unlink');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-unlink.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('insertimage');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-image.png')} />
            </TouchableOpacity>
            <View style={styles.menuDivider}></View>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('insertUnorderedList');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-bullet.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('insertOrderedList');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-number.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('indent');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-indentright.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuBtn} onPress={() => {
              this.executeCommand('outdent');
            }}>
              <Image style={styles.menuBtnImg} source={require('./../image/edit-indentleft.png')} />
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  },

  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
  },

  editable: {
    flex: 1,
    width: '100%',
  },
  editableWeb: {
    width: '100%',
    backgroundColor: '#FFF',
  },

  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderTopColor: '#CCC',
    borderTopWidth: 1,
  },
  menuScroll: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  menuBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtnImg: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  menuDivider: {
    width: 1,
    height: 25,
    marginTop: 7,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: '#CCC',
  },

});