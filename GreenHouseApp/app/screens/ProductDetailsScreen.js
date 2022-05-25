import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';



function ProductDetailsScreen(props) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>

            </View>
            <View style={styles.subHeaderContainer}/>

            <View style={styles.bottomContainer}>

            </View>
            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
    },

    headerContainer:{
        flex: 1,
        height: 230,
        width: 230,
        borderRadius: 180,
        backgroundColor: AppColors.primaryColor,
        position: 'absolute',
        top: -150,
        left: -20,
        transform: [{scaleX: 2}]
    },

    subHeaderContainer:{
        height: 220,
        width: 220,
        borderRadius: 200,
        backgroundColor: AppColors.otherColor_1,
        position: 'absolute',
        top: -120,
        left: -80,
        transform: [{scaleX: 2}]
    },

    bottomContainer: {
        flex: 1,
    },
    
})

export default ProductDetailsScreen;