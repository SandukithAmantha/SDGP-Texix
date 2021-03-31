import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Login = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)} 
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)} 
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Sign In"
                onPress={() => navigation.navigate('Home')} 
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() =>{}} >
                <Text style={styles.navButtonText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.forgotButton} 
                onPress={() => navigation.navigate('SignUp')} >
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Developer')} >
                <Text style={styles.developer}>©TEXIX</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;

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

    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },

    navButton: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    
    forgotButton: {
        marginTop: 15,
    },

    developer: {
        fontSize: 13,
        color: '#FF8C00',
        marginTop: 10,
    }

});