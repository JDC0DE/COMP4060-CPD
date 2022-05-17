import React from 'react';
import { StyleSheet,  View} from 'react-native';

import AppColors from '../config/AppColors';

function AppListItemSeparator(props) {
    return (
        <View style={styles.separator}/>
    );
}

const styles = StyleSheet.create({
    separator:{
        width: '100%',
        height: 1,
        backgroundColor: AppColors.secondaryColor,
    },
    
})

export default AppListItemSeparator;