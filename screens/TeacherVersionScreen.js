import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

const TeacherVersionScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Teacher Version</Text>

            <FormButton buttonTitle="Upload an image" />

            <TouchableOpacity  
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
});
