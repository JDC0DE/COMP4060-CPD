import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppIcon from '../components/AppIcon';
import AppColors from '../config/AppColors';



function MyListingsScreen({navigation}) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
                            <AppIcon name="menu" size={55} borderRadius={20} backgroundColor={AppColors.otherColor_2} iconColor={AppColors.textColor} elevation={10}/>
                </TouchableOpacity>
            </View>
            <View style={styles.middleContainer}>
                <AppText style ={styles.text}>You have no listings!</AppText>

            </View>
            <View style={styles.bottomContainer}>
                

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
        flex: 0.5,
        padding: 20,
        //flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems : 'flex-start',
        marginTop: 10,
        marginBottom: 90,
    },
    middleContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150,
    },
    text:{
        textAlign: 'center',
        color: AppColors.commentColor,
        fontStyle: 'italic',
        fontSize: 17,
    },
})

export default MyListingsScreen;