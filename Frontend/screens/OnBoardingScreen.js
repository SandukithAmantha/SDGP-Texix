import React from 'react';
import { Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        pages={[
            {
            backgroundColor: '#a6e4d0',
            image: <Image source={require('../assets/Picture3.png')} style={styles.image} />,
            title: 'Find Your Mistakes',
            subtitle: 'A new way to find your handwritten character mistakes',
            },
            {
            backgroundColor: '#fdeb93',
            image: <Image source={require('../assets/Picture4.png')} style={styles.image} />,
            title: 'Become The Star',
            subtitle: 'Be the star in the school with great hadnwritting',
            },
            {
            backgroundColor: '#f08080',
            image: <Image source={require('../assets/logo.png')} style={styles.image} />,
            title: 'KIDDO CHECK',
            subtitle: 'Sinhala handwritten character mistake finder',
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

    image : {
        height: 210,
        width: 220,
        resizeMode: 'cover',
    },

});