import React, { useState } from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, Alert, CameraRoll } from 'react-native';
import FormButton from '../components/FormButton';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import storage from '@react-native-firebase/storage';

//Method for pick image fom gallery
const pickFromGallery = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)   
    }else{
        Alert.alert.alert("Permission Blocked")
    }    
}
//Method for pick images from Camera
const pickFromCamera = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
        let data = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)
    }else{
        Alert.alert.alert("Permission Blocked")
    }    
}
openImagePicker = () => {
    ImagePicker.showImagePicker(this.options, async response => {
      this.setState({originUri: response.uri})
      let timestamp = +new Date;
      let fileName = timestamp + '_' + response.fileName;
      if (response.didCancel) {
          console.log('User cancelled image picker')
          return
      } else if (response.error) {
          console.log('ImagePicker Error: ', response.error)
          return
      } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton)
          return
      } else {
          const source = { uri: response.uri };
          this.setState({
            avatarSource: source,
          });
      }


      let { height, width, quality, format, avatarSource } = this.state

      // Resize and post the thumb 
      const resizedImageUri = await ImageResizer.createResizedImage(
          this.state.originUri,
          this.state.height,
          this.state.width,
          this.state.format,
          this.state.quality
      ).then(({uri}) => {
        let imageProperties = {
          uri: uri,
          name: fileName,
          type: 'image/png',
        }
        this.props.onUpload(imageProperties);
      })
    })
  }



const TeacherVersionScreen = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Teacher Version</Text>

           

            <Button
            style={{fontSize: 20, color: 'green'}}
            styleDisabled={{color: 'red'}}
            onPress = {() => pickFromGallery}
           
            title="Gallery"
            >
             Press Me
            </Button>
            <FormButton 
                buttonTitle="Cam" 
                //onPress={() =>openImagePicker}

                //onPress={() =>pickFromCamera}
                onPress={() => async () => {
                    console.log("Line 64")
                    const { uri } = image;
                    const filename = uri.substring(uri.lastIndexOf('/') + 1);
                    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
                    setUploading(true);
                    setTransferred(0);
                    const task = storage()
                      .ref(filename)
                      .putFile(uploadUri);
                    // set progress state
                    // task.on('state_changed', snapshot => {
                    //   setTransferred(
                    //     Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
                    //   );
                    // });
                    try {
                      await task;
                    } catch (e) {
                      console.error(e);
                    }
                    setUploading(false);
                    // Alert.alert(
                    //   'Photo uploaded!',
                    //   'Your photo has been uploaded to Firebase Cloud Storage!'
                    // );
                    setImage(null);
                  }
                } 

                 
            />
            

            <TouchableOpacity
                style={styles.navigateText}  
                onPress={() => navigation.navigate('StudentVersion')} >
                <Text style={styles.navButtonText}>Not a teacher? Go for student version</Text>
                </TouchableOpacity>
        </View>
    );
}



export default TeacherVersionScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edc7b7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    navigateText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
