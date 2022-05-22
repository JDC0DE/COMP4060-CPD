import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';



function SettingsScreen({navigation}) {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    return (
        <AppScreen style={styles.container}>
            <View style ={styles.welcomeContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <AppIcon name = "menu" size={50} iconColor={AppColors.otherColor_3}/>

                </TouchableOpacity>

            </View>
            
            <View style = {styles.settingsContainer}>
                <View style = {{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                    <AppText>Setting #1</AppText>
                    <Switch value = {isEnabled1} onValueChange ={
                    (input => setIsEnabled1(input))
                    }>
                    </Switch>
                </View>
                <View style = {{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                    <AppText>Setting #2</AppText>
                    <Switch value = {isEnabled2} onValueChange ={
                    (input => setIsEnabled2(input))
                    }>
                    </Switch>
                </View>
                <View style = {{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                    <AppText>Setting #3</AppText>
                    <Switch value = {isEnabled3} onValueChange ={
                    (input => setIsEnabled3(input))
                    }>
                    </Switch>
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        //backgroundColor: AppColors.primaryColor,
        padding: 20,
    },
    welcomeContainer:{
        justifyContent: 'center',
        alignItems : 'flex-start',
        marginTop: 10,
        marginBottom: 90,
    },

    settingsContainer:{
            flex:1,
            backgroundColor: 'rgba(71, 91, 99, 0.2)',
            flexDirection: 'column',
            marginVertical: 50,
            borderRadius: 10,
            marginTop: 10,
            justifyContent: 'center',
            alignItems : 'center',
            

    },
})

export default SettingsScreen;