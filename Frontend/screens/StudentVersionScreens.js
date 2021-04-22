import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, } from 'react-native';
import FormButton from '../components/FormButton';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';

const StudentVersionScreen = ({navigation}) => {

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


    return(
        <View style={styles.container}>

            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <Text style={styles.headerText}>Student Version</Text>

            <FormButton  buttonTitle="Pick an Image" onPress={pickImage} /> 
            {image && <Image source={{uri: image}}  style={{width: 200, height: 200, marginTop: 20}} />} 

            <TouchableOpacity 
                style={styles.showMistakes}
                onPress={() => navigation.navigate('Error')} >
                    <Text style={styles.mistakesText}>Check Mistakes</Text>
                </TouchableOpacity>


            <TouchableOpacity
                style={styles.navigateText}  
                onPress={() => navigation.navigate('TeacherVersion')} >
                <Text style={styles.navButtonText}>Not a student? Go for teacher version</Text>
            </TouchableOpacity>


        </View>
    );
}

export default StudentVersionScreen;

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

    

});
