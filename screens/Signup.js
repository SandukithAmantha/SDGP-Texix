import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const Signup = ({navigation}) => {
    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput 
                labelValue={fName}
                onChangeText={(userFName) => setFName(userFName)} 
                placeholderText="First Name"
                iconType="user"
                autoCorrect={false}
            />

            <FormInput 
                labelValue={lName}
                onChangeText={(userLName) => setLName(userLName)} 
                placeholderText="Last Name"
                iconType="user"
                autoCorrect={false}
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

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(userConfirmPassword) => setConfirmPassword(userPassword)} 
                placeholderText="Confirm password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Sign Up"
                onPress={() => navigation.navigate('Home')}
            />
            <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
            <TouchableOpacity><Text style={[styles.color_textPrivate, {color: "#e88832"}]}>Terms of service</Text></TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: "#e88832"}]}>Privacy Policy</Text>
            </View>

            <TouchableOpacity 
                style={styles.forgotButton} 
                onPress={() => navigation.navigate('Login')} >
                <Text style={styles.navButtonText}>Already have an account? Login here</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edc7b7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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

    textPrivate: {
        flexDirection: 'row',
        flexWrap:'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },

    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
});