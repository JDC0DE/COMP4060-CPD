import React, {useState, useCallback} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AppBackButton from '../components/AppBackButton';
import AppButton from '../components/AppButton';
import { auth } from '../config/dataHandler/firebaseDataHandler';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppTextInputAlt from '../components/AppTextInputAlt';
import AppColors from '../config/AppColors';
import AppTextButton from '../components/AppTextButton';



//comeback to forget password handling to validate whether email is correct - idea: log users email locally (security issue?)
function ForgotPasswordScreen(props) {
    const navigation = useNavigation();
    const [text, updateText] = useState(" ");
    const [email, setEmail] = useState();
    const clearInput = useCallback(() => setEmail(" "), [])
    var userEmail = '';
    var actionCodeSettings = {
        url: 'https://greenhouseapp.com'+ userEmail,
        // iOS: {
        //   bundleId: 'com.greenhouseapp.ios'
        // },
        // android: {
        //   packageName: 'com.greenhouseapp.android',
        //   installApp: true,
        //   minimumVersion: '12'
        // }, these settings won't work at the moment due to not having the proper domains i.e. the apps aren't published 
        handleCodeInApp: true
      };
    const handlePasswordReset = (values) => {
        userEmail= values;
        auth.sendPasswordResetEmail(values,actionCodeSettings).then(()=>{
            Alert.alert("Reset","reset email sent to " + userEmail,[
                {text:"Ok", onPress: ()=> {navigation.navigate('Login')}}
            ]);
        })
        .catch(error => alert(error.message))
        
    }
    return (
        
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <AppBackButton onPress={()=>navigation.navigate('Login')} iconColor={AppColors.black}/>
            <View style={styles.subContainer}>
                <View style={styles.textInputContainer}>
                    <AppTextInputAlt
                    color={AppColors.secondaryColor}
                    autoCapitalize="none"
                    icon = "email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText={(inputEmail) => {setEmail(inputEmail)}}
                    //onSubmitEditing={handlePasswordReset(email)}
                    />
                    <AppButton children="RESET EMAIL" textStyle={{color:AppColors.primaryColor}} onPress={() => {handlePasswordReset(email)}} />
                </View>
                <View style={{flex: 0.5}}>
                    <AppTextButton onPress={()=>navigation.navigate('Login')} text="Back to Login"/>

                </View>
            </View>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        marginTop: 0,
        
    },

    subContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputContainer:{
        flex: 0.5,
        padding: 10,
        marginTop: 200,
        
    },
    
})

export default ForgotPasswordScreen;