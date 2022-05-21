import React from 'react';
import { Text, Button, TouchableOpacity, StyleSheet, View} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppText from './AppText';

function AppButton({children, textStyle, color = "otherColor_1", onPress}) {
    return (
        <TouchableOpacity onPress = {onPress} activeOpacity={0.8}>
            <View style = {[styles.button, {backgroundColor:AppColors[color]}, styles.shadow]}>
                <AppText style = {[styles.text,textStyle]}>
                    {children}
                </AppText>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        //borderColor: AppColors.otherColor_3,
        //borderStyle: 'solid',
        //borderWidth: 2,
        //backgroundColor: AppColors.otherColor_2,
        borderRadius: 10,
        width: '100%',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        //marginHorizontal:20,

    },

    shadow: {
        elevation: 20,
        shadowColor: AppColors.black,
        
    },

    text: {
        color: AppColors.primaryColor,
        fontFamily: AppFonts.targetOs,
        fontWeight: 'bold',
        fontSize: 18,
    },
    
})

export default AppButton;