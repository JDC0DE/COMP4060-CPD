import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';




function CartScreen(props) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <AppText style={styles.text}>Your cart is looking a little empty!</AppText>

            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                    <AppButton children={"BUY NOW"}/>
                </View>

            </View>
            

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        
        //marginTop: 20,
    },
    headerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150,
    },

    buttonContainer:{
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    text:{
        textAlign: 'center',
        color: AppColors.commentColor,
        fontStyle: 'italic',
        fontSize: 17,
    },
    
})

export default CartScreen;