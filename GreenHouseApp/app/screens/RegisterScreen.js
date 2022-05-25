import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppButton from '../components/AppButton';
import AppFeatherIcon from '../components/AppFeatherIcon';
import AppLogo from '../components/AppLogo';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';
import AppIcon from '../components/AppIcon';
import AppBackButton from '../components/AppBackButton';
import { auth } from '../config/dataHandler/firebaseDataHandler';
import AppTextButton from '../components/AppTextButton';



const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;
const bgColor = <Image style={{flex:1}} blurRadius={blurRadiusValue} source={require('../assets/pexels-scott-webb-305827.jpg')}/>;
const {width, height} = Dimensions.get("window");
const schema = yup.object().shape(
    {
        name: yup.string().required().label("name"),
        email: yup.string().required().email().label("email"),
        password: yup.string().required().min(6).label("password"),
    }
);

function RegisterScreen({navigation}) {
    window.newUserName = name;
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        checkNameInputChange: false,
        checkEmailInputChange: false,
        secureTextEntry: true,
    });

    const handleNameChange = (values) => {
        if( values.length != 0 ){
            setData({
                ...data,
                name: values,
                checkNameInputChange: true,
            });      
        }
        else{
            setData({
                ...data,
                email: values,
                checkNameInputChange: false,
            });     
        }
    }

    const handleEmailChange = (values) => {
        if( values.length != 0 ){
            setData({
                ...data,
                email: values,
                checkEmailInputChange: true,
            });      
        }
        else{
            setData({
                ...data,
                email: values,
                checkEmailInputChange: false,
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // useEffect(() => {
    //     const stopListener = auth.onAuthStateChanged(user => {
    //         if (user){
    //             navigation.navigate("Login")
    //         }
    //     })
    //     return stopListener
    // }, [])

    const handleRegister = () => {
        
        auth.createUserWithEmailAndPassword(email, password).then((userCredentials) => {
            if(userCredentials.user){
                userCredentials.user.updateProfile({
                    displayName: name
                }).then((s)=>{
                    const user = userCredentials.user;
                    console.log("Registered as:",user.email);
                    navigation.navigate("Login")
                })
            }
            
            
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
                    {/* <View style ={styles.backContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
                            <AppIcon name={"keyboard-backspace"} iconColor={AppColors.otherColor_2} size={60}/>
                        </TouchableOpacity>
                        
                    </View> */}
                    <AppBackButton onPress={()=> navigation.navigate('Welcome')}/>
                    <View style ={styles.welcomeLogoContainer}>
                        <AppLogo animationType="bounceInDown" style={{height:"100%"}}/>
                    </View>
                    <Animatable.View style={styles.welcomeText} animation='fadeInLeftBig'>
                            <AppText style={styles.headerText}>Take a Step in the GreenHouse!</AppText>
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
                <KeyboardAwareScrollView
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={true}
                                        >
                 
                    <AppText style={styles.nameHeading}>Name</AppText>

                    <AppTextInput
                    dataTextInput = {data.checkNameInputChange}
                    name={"check-circle"}
                    featColor='green'
                    color={AppColors.secondaryColor}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon = "account"
                    placeholder="Name"
                    textContentType="name"
                    onBlur = {() => setFieldTouched("name")}
                    onChangeText={(values) => {handleNameChange(values); setName(values); handleChange("name")(values);}}
                    />
                    {touched.name && <AppText style={{color: "red", fontSize:14}}>{errors.name}</AppText>}
                    <AppText style={styles.emailHeading}>Email</AppText>

                    <AppTextInput
                     dataTextInput = {data.checkEmailInputChange}
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
                        <AppButton children="REGISTER" onPress={ handleRegister}/>
                    </View>
                    <AppTextButton onPress={()=>navigation.navigate('Eula')} text="By signing up you agree to our Terms of Use"/>
                    </KeyboardAwareScrollView>
                </Animatable.View>
                
                </> 

                )}

                </Formik>
              
            </ImageBackground>
            
       </AppScreen>
    );
}

const styles = StyleSheet.create({
    // backContainer:{
    //     marginTop: 30,
    //     //flexDirection: 'row',
       
    //     //marginTop: ,
    // },

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
    nameHeading:{
        fontWeight: 'bold',
        color: AppColors.black,
    },
    passwordHeading:{
        fontWeight: 'bold',
        color: AppColors.black,
        
    },
    // tocText:{
    //     opacity: 0.7,
    //     color: AppColors.secondaryColor,
    //     textDecorationLine: 'underline',
    //     alignSelf: 'center',
    //     fontSize: 16,
    //     marginTop: -20,
        
    // },
    welcomeLogoContainer:{
        flex:1,
        
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

export default RegisterScreen;