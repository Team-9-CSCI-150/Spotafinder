import React from 'react';
import { Image, View,TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import Assets from './constants';
import Firebase from '../../../configs/firebase';

function profile(path) {
    var storage = Firebase.storage().ref();
    var image = storage.child('images').child(Firebase.auth().currentUser.uid);

    var message = path.split('/');
    var data = message[message.length - 1];
    image.child(data).putString(data).then(() => {
        console.log('Image ' + data + ' have upload!');
    });
}

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity 
            onPress = {() => {
                this._pickImage()
            }}
        >
            {image ? 
                (<Image source={{ uri: image }} style={{ width: 120, height: 120 }} />) :
                (<Image source = {Assets.profile} style={{width: 120, height: 120}}/>)
            }
        </TouchableOpacity>
        
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      profile(result.uri);
    }
  };
}