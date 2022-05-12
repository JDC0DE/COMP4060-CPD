import React, {useState} from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppFeatherIcon from './AppFeatherIcon';

//custom component for text inputs intended for register/login as the design choice was to have only a line to indicate where to type
function AppTextInput({ onPress, dataTextInput, dataSecure, icon, color, featColor, name, ...otherProps}) {

    return (
       <View style = {styles.container}>
           {icon && <MaterialCommunityIcons name = {icon} color = {color?color: AppColors.black} size ={22}/>}
           <TextInput style ={styles.textInput} {...otherProps}/>
           
           {dataTextInput?
           name=="check-circle" && <Animatable.View animation='bounceIn'>
               <AppFeatherIcon name={name} iconColor = {featColor} size={30}/></Animatable.View>
            :null}
            {name == "eye-off"  && <TouchableOpacity onPress={onPress}>
                {dataSecure?
                <AppFeatherIcon name={"eye-off"} iconColor = {featColor} size={30}/>:
                <AppFeatherIcon name={"eye"} iconColor = {featColor} size={30}/>
                    }
                </TouchableOpacity>}
            {name!="check-circle" && name!="eye-off" && <AppFeatherIcon name={name} iconColor = {featColor} size={30}/>}
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        borderBottomColor: AppColors.secondaryColor,
        borderStyle: 'dotted',
        borderBottomWidth: 1,
        borderRadius: 1,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems : 'center',
    },

    textInput: {
        fontSize: AppFonts.fontSize,
        fontFamily: AppFonts.targetOs,
        color: AppColors.black,
        marginLeft: 10,
        flex: 1,
    },
    
})

export default AppTextInput;