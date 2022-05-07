import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize:AppFonts.fontSize,
        color: AppColors.black,
        fontFamily: AppFonts.targetOs,
    },
})

export default AppText;