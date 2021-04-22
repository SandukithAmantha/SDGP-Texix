import React from 'react';
import { Text, View,TextInput,Image,Button, TouchableOpacity, StyleSheet, } from 'react-native';

const ShowErrorScreen = ({navigation}) => {
        return (
            <View style={styles.container}>

            <Text style={styles.header}>Mistake</Text>

            </View>
        )
}

export default ShowErrorScreen;

const styles = StyleSheet.create({
    header: {
        fontSize:20,
    },
    
    container: {
        backgroundColor: '#edc7b7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})