import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';


function AppIcon({name, size=40, iconColor, backgroundColor, elevation, image, position}) {
    return (
    
        <View style = {{width: size, height: size, backgroundColor, borderRadius: size/2, alignItems: 'center', justifyContent: 'center', elevation, shadowColor: AppColors.black, marginLeft: position}}>
            {image && isFinite(image)? <Image source ={image} style ={styles.image}/>: console.log()}
            <MaterialCommunityIcons name ={name} size = {size*0.6} color ={iconColor}/>
        </View>
    );
}
const styles = StyleSheet.create({
    image:{
        marginTop: 40,
        height: 40,
        width:40,
        borderRadius: 37,
    },

})
export default AppIcon;