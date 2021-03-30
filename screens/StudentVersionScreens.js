import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, } from 'react-native';
import FormButton from '../components/FormButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const StudentVersionScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Student Version</Text>

            <FormButton 
                buttonTitle="Upload an image" 
                onPress={() =>this} 
            />

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
        fontSize: 16,
        fontWeight: 'bold',
    },

    navigateText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
    },

});

