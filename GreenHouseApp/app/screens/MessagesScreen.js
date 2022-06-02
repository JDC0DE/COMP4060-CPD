import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppColors from '../config/AppColors';


function MessagesScreen(props) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <AppText style ={styles.text}>No messages today!</AppText>

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

export default MessagesScreen;