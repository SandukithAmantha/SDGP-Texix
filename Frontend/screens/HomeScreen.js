import React from 'react';
import { Text, View,TextInput,Image,Button, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

const HomeScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <FormButton 
                buttonTitle="Student Version"
                onPress={() => navigation.navigate('StudentVersion')} 
            />
            <FormButton 
                buttonTitle="Teacher Version"
                onPress={() => navigation.navigate('TeacherVersion')} 
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edc7b7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        height: 150,
        width: 165,
        resizeMode: 'cover',
    },
})