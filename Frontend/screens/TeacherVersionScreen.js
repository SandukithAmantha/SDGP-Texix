import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, } from 'react-native';
import FormButton from '../components/FormButton';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
<<<<<<< Updated upstream
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
=======
import ImgToBase64 from 'react-native-image-base64';
//import RNFS from 'react-native-fs';
>>>>>>> Stashed changes

const TeacherVersionScreen = ({navigation}) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !=='mobile') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if ( status !=='granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        }) ();
    }, []);

    const pickImage = async () => {

       

    // RNFS.readFile(this.state.imagePath, 'base64')
    // .then(res =>{
    //  console.log(res);
    // });
    //const encodeImg = ImgToBase64.getBase64String('../assets/piano.jpg')
    //.then(base64String => doSomethingWith(base64String))
    //  .then(console.log(encodeImg))
    //.catch(err => doSomethingWith(err));
    //  .catch(err => console.log(err));    
    //     console.log("hola");
    //     const encode =  ImgToBase64.getBase64String('file:///D:/IIT/2ND YR/SDGP/KIDDO-CHECK/Frontend/assets/piano.jpg')
    //    .then(base64String => console.log(base64String))
    //    .catch(err => console.log(err));
    //     console.log(encode);
    //     alert(encode);

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

    
        });


        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    


    return(
        <View style={styles.container}>

            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.headerText}>Teacher Version</Text>

<<<<<<< Updated upstream
            <FormButton  buttonTitle="Take a photo" onPress={takePhoto} />  
            <FormButton  buttonTitle="Choose an Image" onPress={pickImage} /> 
            {image && <Image source={{uri: image}} style={{width: 200, height: 200, marginTop: 20, marginBottom: 20}} />}
            
=======
            <FormButton  buttonTitle="Pick an Image" onPress={pickImage} /> 
            
            {image && <Image source={{uri: image}} style={{width: 200, height: 200, marginTop: 20}} />} 
>>>>>>> Stashed changes

            <TouchableOpacity 
                style={styles.showMistakes}
                onPress={() => navigation.navigate('Error')} >
                    <Text style={styles.mistakesText}>Check Mistakes</Text>
                </TouchableOpacity>


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
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },

    navigateText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    },

    logo: {
        height: 150,
        width: 165,
        resizeMode: 'cover',
        marginBottom: 5,
    },

    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, header: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    pannelHeader: {
        alignItems: 'center'
    },
    
    pannelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 30,
    },

    

});
