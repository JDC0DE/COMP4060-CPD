import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View, Image } from 'react-native';
import Constants from 'expo-constants';


import AppColors from '../config/AppColors';

const blurRadiusValue = Platform.OS === "android" ? 1 : 5.5;

const bgColor = <Image style={{flex:1}} blurRadius={blurRadiusValue} source={require('../assets/pexels-scott-webb-305827.jpg')}/>;

function AppScreen({children, style, backgroundColor, barStyle}) {
    return (
        
        <SafeAreaView style = {[styles.screen, style]}>
                {children}
                <StatusBar translucent = {true} backgroundColor= {backgroundColor?backgroundColor: "transparent"} animated={true}  barStyle= {barStyle?barStyle:'light-content'}/>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: AppColors.white,
        
    },
    paddingView:{
        //padding: 20,
        
    },
})

export default AppScreen;