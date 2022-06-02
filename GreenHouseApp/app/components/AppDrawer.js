import React from 'react';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity,Linking} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import { auth } from '../config/dataHandler/firebaseDataHandler';

import AppText from './AppText';
import AppColors from '../config/AppColors';
import AppIcon from './AppIcon';
import AppFonts from '../config/AppFonts';



//custom component for drawer navigation - will display user login details via use of global variables which retrieve data from Account Screen

function AppDrawer(props) {
    const navigation = useNavigation();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.navigate("Welcome")
        })
        .catch(error => alert(error.message))
    }
    //const checkEmail = route.params.paramEmail;
    const handlePress =() => {navigation.navigate("Welcome")};
    return (
        <View style={styles.headerContainer}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: AppColors.otherColor_2, paddingVertical:0, borderBottomStartRadius: 10 ,borderBottomEndRadius: 10}}>
            <StatusBar />
            <View style={{borderBottomEndRadius: 10,backgroundColor: 'rgba(71, 91, 99, 0.5)',padding:20, marginTop: 0, marginBottom: 10, flexDirection: 'column'}}>
            <AppIcon name = "account-outline" size={40} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} elevation={20}/>
            <AppText style={{marginBottom:10, color: AppColors.textColor}}>{auth.currentUser?.displayName} </AppText>
            <View style = {{marginTop: 0,flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
                <AppIcon name = "email" size={20} iconColor={AppColors.otherColor_2} />
                <Text style ={styles.emailText}>{auth.currentUser?.email}</Text>
            </View>
            </View>
            <View style ={styles.itemsContainer}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        
        <View style={styles.bottomContainer}> 
            <TouchableOpacity onPress={()=>{Linking.openURL('https://www.facebook.com/')}} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', alignItems:'center', marginLeft: 15}}>
                <AppIcon name = "share-variant" size={40} iconColor={AppColors.textColor}/>
                <Text style={{fontFamily:AppFonts.targetOs, fontSize:13, color:AppColors.textColor, marginLeft: 15}}>Share Experience</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignOut} style={{paddingVertical:15}}>
                <View style={{flexDirection:'row', justifyContent: 'flex-start', alignItems:'center', marginLeft: 15, marginBottom: 60}}>
                <AppIcon name = "logout-variant" size={40} iconColor={AppColors.textColor}/>
                <Text style={{fontFamily:AppFonts.targetOs, fontSize:13, color:AppColors.textColor, marginLeft: 15}}>Sign Out</Text>
                
                </View>
                
            </TouchableOpacity>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainer:{
        flex: 1,
        marginTop:0,
        
    },
    emailText:{
        fontSize: 10,
        fontFamily: AppFonts.targetOs,
        color: AppColors.otherColor_3,
    },
    itemsContainer:{
        flex: 1,
        padding: 10,
    },
    bottomContainer:{
        padding:20,
        borderTopWidth:1,
        borderTopColor: 'rgba(71, 91, 99, 0.5)',
        
    },
})

export default AppDrawer;