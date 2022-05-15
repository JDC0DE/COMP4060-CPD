import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import AppIcon from './AppIcon';
import AppColors from '../config/AppColors';



function AppBackButton({navigation, destination, style, iconColor}) {
    return (
    <View style ={[styles.backContainer, style]}>
        <TouchableOpacity onPress={() => navigation.navigate(destination)}>
            <AppIcon name={"keyboard-backspace"} iconColor={iconColor && iconColor?iconColor:AppColors.otherColor_2} size={60}/>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    backContainer:{
        marginTop: 30,
        //flexDirection: 'row',
       
        //marginTop: ,
    },
})

export default AppBackButton;