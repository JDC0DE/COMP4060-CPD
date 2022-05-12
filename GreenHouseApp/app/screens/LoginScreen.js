import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppButton from '../components/AppButton';

import AppFeatherIcon from '../components/AppFeatherIcon';
import AppLogo from '../components/AppLogo';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';



const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;
const bgColor = <Image style={{flex:1}} blurRadius={blurRadiusValue} source={require('../assets/pexels-scott-webb-305827.jpg')}/>;
const {width, height} = Dimensions.get("window");

function LoginScreen(props) {

    const [data, setData] = useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (values) => {
        if( values.length != 0 ){
            setData({
                ...data,
                email: values,
                checkTextInputChange: true,
            });      
        }
        else{
            setData({
                ...data,
                email: values,
                checkTextInputChange: false,
            });     
        }
    }

      const handlePasswordChange = (values) => {
        setData({
            ...data,
            password: values,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    return (
       <AppScreen style={{marginTop:0}}>
           <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/pexels-scott-webb-305827.jpg')}
            style={styles.imageContainer}
            >
                <View style={styles.headerContainer}>
                    <AppLogo animationType="bounceInDown" style={{height:"100%"}}/>
                    <AppText style={styles.headerText}>Welcome to the GreenHouse!</AppText>

                </View>
                
                <Animatable.View style = {styles.footerContainer} animation='fadeInUpBig'>
                    <AppText style={styles.emailHeading}>Email</AppText>

                    <AppTextInput
                     dataTextInput = {data.checkTextInputChange}
                     name={"check-circle"}
                     featColor='green'
                     color={AppColors.secondaryColor}
                     autoCapitalize="none"
                     autoCorrect={false}
                     icon = "email"
                     placeholder="Email Address"
                     keyboardType="email-address"
                     textContentType="emailAddress"
                     onChangeText={(values) => textInputChange(values)}
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
                     secureTextEntry = {data.secureTextEntry ? true: false}
                     onChangeText={(values) => handlePasswordChange(values)}
                     textContentType="password"
                     onPress={updateSecureTextEntry}
                     dataSecure={data.secureTextEntry}
                    /> 
                    <View style = {styles.buttonContainer}>
                        <AppButton children="REGISTER"/>
                    </View>
                   
                </Animatable.View>
            
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
    buttonContainer:{
        height: height/5,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },

    emailHeading:{
        fontWeight: 'bold',
    },

    footerContainer:{
        flex: 1.5,
        backgroundColor: AppColors.otherColor_2,
        overflow: 'hidden',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },


})

export default LoginScreen;