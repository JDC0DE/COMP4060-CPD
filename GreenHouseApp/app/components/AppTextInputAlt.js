import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

//Alternative custom text input component with with a rounded, background colour design intended for input fields of creating a new image
function AppTextInputAlt({icon, color, ...otherProps}) {
    return (
       <View style = {styles.container}>
           {icon && <MaterialCommunityIcons name = {icon} color = {color?color: AppColors.black} size ={22}/>}
           <TextInput style ={styles.textInput} {...otherProps}/>
       </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor_2,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10,
        marginVertical: 20,
        //marginLeft: 20,
        //marginRight: 20,
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

export default AppTextInputAlt;