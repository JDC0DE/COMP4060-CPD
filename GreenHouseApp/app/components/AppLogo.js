import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

function AppLogo({animationType, style}) {
    return (
        <Animatable.Image
        animation={animationType}
        duration={1500}
        source={require('../assets/GreenHouse_Logo_Updated.png')}
        resizeMode= 'cover'
        style={[styles.logo, style]}
        />
    );
}

const styles = StyleSheet.create({
    logo:{
        //flex: 1,
        marginTop: 50,
        height: '30%',
        width: '100%',
    },
    
})

export default AppLogo;