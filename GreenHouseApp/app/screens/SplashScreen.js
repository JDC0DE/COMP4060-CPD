import React from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';



function SplashScreen() {
    const navigation = useNavigation();
    return (
        <LottieView 
        source={require('../assets/62761-walking-pothos.json')}
        autoPlay
        loop={false}
        speed={0.5}
        //duration = {10000}
        //autoPlay loop 
        onAnimationFinish={() => navigation.navigate("Welcome")}
        />
     );
}

const styles = StyleSheet.create({
    
})

export default SplashScreen;