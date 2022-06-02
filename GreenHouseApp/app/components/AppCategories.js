import React from 'react';
import { StyleSheet, View,TouchableOpacity } from 'react-native';


import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppText from './AppText';



function AppCategories({text, textStyle, color = "otherColor_2", onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} activeOpacity={0.8}>
            <View style = {[styles.button, {backgroundColor: text =="All"?AppColors.textColor:AppColors[color]}]}>
                <AppText style = {[styles.text,textStyle]}>
                    {text}
                </AppText>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 20,
        height: 50,
        width: 120,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    text: {
        color: AppColors.secondaryColor,
        fontFamily: AppFonts.targetOs,
        fontWeight: 'bold',
        fontSize: 16,
    },
})

export default AppCategories;