import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import AppButton from '../components/AppButton';
import AppFeatherIcon from '../components/AppFeatherIcon';
import AppLogo from '../components/AppLogo';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppIcon from '../components/AppIcon';
import { auth, updateProfile } from '../config/dataHandler/firebaseDataHandler';
import AppBackButton from '../components/AppBackButton';
import AppTextButton from '../components/AppTextButton';




const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;
const bgColor = <Image style={{flex:1}} blurRadius={blurRadiusValue} source={require('../assets/pexels-scott-webb-305827.jpg')}/>;
const {width, height} = Dimensions.get("window");
const schema = yup.object().shape(
    {
        email: yup.string().required().email().label("email"),
        password: yup.string().required().min(6).label("password"),
    }
);


// const validateUser = ({email,password}) => {
//     return(
        
//     );
// }

function LoginScreen({}) {
    const navigation = useNavigation();

    const [data, setData] = useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
    });

    const handleEmailChange = (values) => {
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

    //state variables - uses hooks to grab users input to set email and password
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //listener for listening to firebase to see if any users are logged in so we can navigate when they are
    // if we have a user then we are going to use navigation to go to listings
    //when leaving the screen we will stop pinging the listener 
    useEffect(() => {
        const stopListener = auth.onAuthStateChanged(user => {
            if (user){
                updateProfile(auth.currentUser, {
                    displayName: window.newUserName
                }).then(()=> {
                    console.log(auth.currentUser.displayName);
                }).catch((error)=>{
                    console.log(error);
                });
                navigation.navigate("Listing")
            }
        })
        return stopListener
    }, [])

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(email, password).then(userDetails => {
            const user = userDetails.user;
            console.log("Signed in as:",user.email);
        })
        .catch(error => alert(error.message))
    
    }

    return (
       <AppScreen style={{marginTop:0}}>
           <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/pexels-scott-webb-305827.jpg')}
            style={styles.imageContainer}
            >
                <View style={styles.headerContainer}>
                   
                    <AppBackButton  onPress={()=> navigation.navigate('Welcome')}/>
                    
                    <View style ={styles.welcomeLogoContainer}>
                        <AppLogo animationType="bounceInDown" style={{height:"100%"}}/>
                    </View>
                    <Animatable.View style={styles.welcomeText} animation='fadeInLeftBig'>
                            <AppText style={styles.headerText}>Welcome Back!</AppText>
                    </Animatable.View>


                </View>
                
                <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                    if(values){
                        resetForm();
                        console.log(values);
                    } else{
                        resetForm();
                    }
                }
            }
                validationSchema={schema}
                >
                {({values, handleChange, handleSubmit, errors, setFieldTouched, touched, handleReset }) => (
                <>
                
                <Animatable.View style = {styles.footerContainer} animation='fadeInUpBig'>
                <KeyboardAvoidingView behavior={'height'} enabled ={true}> 
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
                     //value={values.email}
                     onBlur = {() => setFieldTouched("email")}
                     onChangeText={(values) => {handleEmailChange(values); setEmail(values); handleChange("email")(values);}}
                    />
                    {touched.email && <AppText style={{color: "red", fontSize:14}}>{errors.email}</AppText>}
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
                     //value={values.password}
                     onBlur = {() => setFieldTouched("password")}
                     onChangeText={(values) => {handlePasswordChange(values); setPassword(values); handleChange("password")(values);}}
                     textContentType="password"
                     onPress={updateSecureTextEntry}
                     dataSecure={data.secureTextEntry}
                    /> 
                    {touched.password && <AppText style={{color: "red", fontSize:14}}>{errors.password}</AppText>}
                    <View style = {styles.buttonContainer}>
                        <AppButton children="SIGN IN" onPress={ handleSignIn }/>
                    </View>
                    <AppTextButton onPress={()=>navigation.navigate('ForgotPassword')} text="Forgot your password?" style={{flex: 0.15, marginTop: 20}}/>
                    
                    </KeyboardAvoidingView>     
                </Animatable.View>
                
                </> 

                )}

                </Formik>
            
            </ImageBackground>
           
       </AppScreen>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        height: height/5,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    
    emailHeading:{
        fontWeight: 'bold',
        color: AppColors.black,
    },
    
    footerContainer:{
        flex: 1.75,
        backgroundColor: AppColors.otherColor_2,
        overflow: 'hidden',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        
    },
    headerContainer:{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        paddingBottom: 50, 
    },

    headerText:{
        color: AppColors.otherColor_2,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 22,
        
    },
    
    imageContainer:{
        flex:1,
        height: null,
        width: null,
        
    },
    passwordHeading:{
        fontWeight: 'bold',
        color: AppColors.black,
        
    },
    welcomeLogoContainer:{
        flex: 1,
        //backgroundColor: "white",
        marginBottom: 40,
        justifyContent: 'center',
    },
    welcomeText:{
        //backgroundColor: 'white',
        marginBottom: -30,
        //height: 50,
       
    },


})

export default LoginScreen;