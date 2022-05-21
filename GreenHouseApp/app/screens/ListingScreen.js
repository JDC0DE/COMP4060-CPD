import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { auth } from '../config/dataHandler/firebaseDataHandler';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppScreen from '../components/AppScreen';
import AppDrawer from '../components/AppDrawer';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';


const {width, height} = Dimensions.get("window");

function ListingScreen({navigation}) {
const handleSignOut = () => {
    auth.signOut().then(() => {
        navigation.navigate("Welcome")
    })
    .catch(error => alert(error.message))
}
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style ={styles.headerContainer}>
                <View style = {styles.leftSide}>
                    <AppIcon name="menu" size={55} borderRadius={20} backgroundColor={AppColors.otherColor_2} iconColor={AppColors.otherColor_1} elevation={10}/>
                </View>
                <View style={styles.rightSide}>
                    <AppIcon name="bell-outline" size={55} borderRadius={15}  iconColor={AppColors.otherColor_1} elevation={0}/>
                </View>
            </View>
            <ScrollView 
            scrollEnabled = {true}
            >

            </ScrollView>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        //marginTop: 0,
    },

    headerContainer:{
        flex: 1,
        flexDirection: 'row',
        //backgroundColor: AppColors.black
    },

    leftSide:{
        padding: 10,
        marginTop: 20,
        marginLeft: width/12,
    },

    rightSide:{
        //backgroundColor: AppColors.black,
        padding: 10,
        marginTop: 20,
        marginLeft: width/2,
        //flexDirection: ,
        
    },

})

export default ListingScreen;