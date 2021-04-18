import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, Alert, CameraRoll } from 'react-native';
import FormButton from '../components/FormButton';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


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



const TeacherVersionScreen = ({navigation}) => {
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
                onPress={() =>pickFromCamera}
                 
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
