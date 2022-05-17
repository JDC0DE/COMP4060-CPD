import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import AppColors from '../config/AppColors';
import AppIcon from './AppIcon';



function AppListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteView}>
                <AppIcon name = {"trash-can-outline"} size={60} iconColor = {AppColors.otherColor_3}/>
            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    deleteView:{
        backgroundColor: AppColors.swipeDelete,
        width: 70,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        
    },
})

export default AppListItemDeleteAction;