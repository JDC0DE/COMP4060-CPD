import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppEulaText from '../config/AppEulaText';
import AppColors from '../config/AppColors';
import AppBackButton from '../components/AppBackButton';



function EulaScreen({navigation}) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <AppBackButton onPress={()=>navigation.navigate('Register')} iconColor={AppColors.black}/>
            </View>
            <View style={{paddingBottom: 30}}>
                <AppText style={styles.title}>END USER LICENCE AGREEMENT</AppText>
            </View>
            <ScrollView style={styles.footerContainer} fadingEdgeLength={100}>
                <AppText style={styles.text}>{AppEulaText}</AppText>
            </ScrollView>
           
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.otherColor_3,
    },
    headerContainer:{
        flex: 0.12,
        
    },
    footerContainer:{
        flex:7,
    
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center',
    },

    text:{
        color:'rgba(71, 91, 99, 0.5)',
        fontSize: 18,
        textAlign: 'center',
        
    },

})

export default EulaScreen;