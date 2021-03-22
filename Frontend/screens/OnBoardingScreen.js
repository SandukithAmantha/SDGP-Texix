import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/Picture3.png')} />,
            title: 'Find Your Mistakes',
            subtitle: 'A New Way To Find Your Handwritten Character Mistakes',
            },
            {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/Picture4.png')} />,
            title: 'Become The Star',
            subtitle: 'Be The Smartest Student In The School',
            },
            
        ]}
    />
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});