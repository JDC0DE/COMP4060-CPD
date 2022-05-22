import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppIcon from './AppIcon';

//Custom component for creating an image which has more information -(metadata) displayed below the image 
function AppCard({price, rating, title, image, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
            <View style = {styles.container}>
                {isFinite(image)? <Image source ={image} style ={styles.image}/>: <Image source ={{uri: image}} style ={styles.image}/>}
                <View style={styles.textContainer}>
                    <View style={styles.leftTextContainer}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style ={styles.title}>{title}</Text>
                        </View>
                    
                        <View style={{flexDirection:'row' , alignItems:'center'}}>
                        <AppIcon name={"star-outline"} iconColor={AppColors.secondaryColor}/>
                        <Text style ={styles.category}>{rating}</Text>
                        </View>
                    
                        <View style={{flexDirection:'row' , alignItems:'center'}}>
                        <AppIcon name={"currency-usd"} iconColor={AppColors.secondaryColor}/>
                        
                        <Text style ={styles.edit}>{price}</Text>
                        </View>
                        
                        
                    
                    </View>
                    
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_2,
        //height: 100,
        borderRadius: 20,
        overflow:"hidden",
        marginBottom: 25,
        shadowColor: AppColors.black,
        elevation: 10,
    },

    leftTextContainer:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    image:{
        height: 200,
        width:200,
    },
    textContainer:{
        paddingLeft: 10,
        justifyContent: 'space-around',
        alignItems: 'flex-start',

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.secondaryColor,
    },

    date: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.secondaryColor,
    },
    category: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.secondaryColor,
    },
    location: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.secondaryColor,
    },

    edit:{
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: AppFonts.targetOs,
        color: AppColors.secondaryColor,
    },
    
})

export default AppCard;