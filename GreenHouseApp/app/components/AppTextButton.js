import React from 'react';
import { StyleSheet, TouchableOpacity,  View} from 'react-native';

import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppTextButton({onPress, style, text}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[{flex:1}, style]}>
                <AppText style={styles.pressText}>{text}</AppText>

            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pressText:{
        opacity: 0.7,
        color: AppColors.secondaryColor,
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 16,
        marginTop: -20,      
    
    },
    
})

export default AppTextButton;