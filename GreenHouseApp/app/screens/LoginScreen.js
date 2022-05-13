import React, {useState} from 'react';
import { StyleSheet, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppButton from '../components/AppButton';
import { Formik } from 'formik';
import * as yup from 'yup';

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
const schema = yup.object().shape(
    {
        email: yup.string().required().email().label("email"),
        password: yup.string().required().min(4).label("password"),
    }
);

// const validateUser = ({email,password}) => {
//     return(
        
//     );
// }

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

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                     onChangeText={(values) => {textInputChange(values), setEmail(values), handleChange("email")}}
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
                     onChangeText={(values) => {handlePasswordChange(values); setPassword(values); handleChange("password");}}
                     textContentType="password"
                     onPress={updateSecureTextEntry}
                     dataSecure={data.secureTextEntry}
                    /> 
                    {touched.password && <AppText style={{color: "red", fontSize:14}}>{errors.password}</AppText>}
                    <View style = {styles.buttonContainer}>
                        <AppButton children="REGISTER" onPress={ handleSubmit}/>
                    </View>
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