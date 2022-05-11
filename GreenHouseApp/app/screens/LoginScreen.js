import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import AppFeatherIcon from '../components/AppFeatherIcon';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';



const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;
const bgColor = <Image style={{flex:1}} blurRadius={blurRadiusValue} source={require('../assets/pexels-scott-webb-305827.jpg')}/>;

function LoginScreen(props) {

    return (
       <AppScreen style={{marginTop:0}}>
           <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/pexels-scott-webb-305827.jpg')}
            style={styles.imageContainer}
            >
                <View style={styles.headerContainer}>

                </View>
                <View style = {styles.footerContainer}>
                    <AppText style={styles.emailHeading}>Email</AppText>
        
                    <AppTextInput
                     //data = {data}
                     name={"check-circle"}
                     featColor='green'
                     color={AppColors.secondaryColor}
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon = "email"
                     placeholder="Email Address"
                     keyboardType="email-address"
                     textContentType="emailAddress"
                     //onChangeText={(values) => textInputChange(values)}
                    />
                    
                    <AppText style={styles.passwordHeading}>Password</AppText>
                    
                    <AppTextInput
                     name='eye-off'
                     featColor='grey'
                     color={AppColors.secondaryColor}
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon = "lock-outline"
                     placeholder="Password"
                     secureTextEntry
                     textContentType="password"
                    />  
                    
                </View>
            </ImageBackground>
           
       </AppScreen>
    );
}

const styles = StyleSheet.create({
    imageContainer:{
        flex:1,
        height: null,
        width: null,
        
        
        
    },
    headerContainer:{
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 50, 
    },

    passwordHeading:{
        fontWeight: 'bold',
        
    },

    emailHeading:{
        fontWeight: 'bold',
    },

    footerContainer:{
        flex: 3,
        backgroundColor: AppColors.otherColor_2,
        overflow: 'hidden',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },


})

export default LoginScreen;