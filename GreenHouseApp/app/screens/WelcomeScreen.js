import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity,ImageBackground, BackHandler, Alert, Platform, LogBox } from 'react-native';
import  Asset from 'expo-asset';
import AppLoading from 'expo-app-loading'
import {useNavigation} from '@react-navigation/native';
import { useBackHandler } from "@react-native-community/hooks"
import * as Animatable from 'react-native-animatable';
//import * as Google from 'expo-google-app-auth';
//import * as Google from 'expo-auth-session/providers/google';
//import { GoogleSignin } from '@react-native-google-signin/google-signin';
//import Animated from 'react-native-reanimated';
//import { TabGestureHandler, State } from 'react-native-gesture-handler';



import AppScreen from '../components/AppScreen';
import AppIndex from '../components/AppIndex';
import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppIcon from '../components/AppIcon';
import AppFeatherIcon from '../components/AppAltIcon';
import AppLogo from '../components/AppLogo';





const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;

const {width, height} = Dimensions.get("window");

// function withMyHook(Component){
//     return function WrappedComponent(props){
//         const backActionHandler = () => {
//             Alert.alert("Alert!", "Are you sure you want to exit app?", [
//               {
//                 text: "Cancel",
//                 onPress: () => null,
//                 style: "cancel"
//               },
//               { text: "YES", onPress: () => BackHandler.exitApp() }
//             ]);
//             return true;
//           };
        
//         //useBackHandler(backActionHandler);
//         return <Component {...props} backActionHandler={backActionHandler}/>
//     }
// }


function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

//const {Value, event, block, cond, eq, set} = Animated

// const handleGoogleSignIn = () => {
//       const config = {
//       iosClientId: `659635831658-k2p6jsd4l15n9l1jc0i6rsrv6f1rkfq8.apps.googleusercontent.com`, 
//       androidClientId: `659635831658-rotb50m6d3t59bmn7e0ch93jmk7f20be.apps.googleusercontent.com`,
//       scopes: ['profile', 'email'],
//     };
    
  
// }

// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

// GoogleSignin.configure({
//       webClientId: "1002396336307-o56ae81o2kkt2n350c1rrm9vo8a0p6e4.apps.googleusercontent.com",
//     });

//onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))} - for on press

export default class WelcomeScreen extends React.Component{
    constructor(props){
        super()
        this.state={
            isReady:false
        }

        // this.buttonOpacity = new Value(1)

        // this.onStateChange = Animated.event([
        //     {
        //         nativeEvent:({state})=>block([
        //             cond(eq(state, State.END), set(this.buttonOpacity, 0))
        //         ])
        //     }
        // ])
        
    }

  

    // GoogleSignin.configure({
    //   webClientId: "1002396336307-o56ae81o2kkt2n350c1rrm9vo8a0p6e4.apps.googleusercontent.com",
    // });

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to leave?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => {BackHandler.exitApp(); this.componentWillUnmount();} }
        ]);
        return true;
      };

    
      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
        LogBox.ignoreLogs(['TypeError: undefined is not an object']);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
      }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
          require('../assets/pexels-scott-webb-305827.jpg'),
          //require('../assets/GreenHouse_Logo.png'),
        ]);
    
    
        await Promise.all([...imageAssets]);
      }

      
    
    render() {
        const backActionHandler = this.props.backActionHandler;
        if (!this.state.isReady) {
            return (
              <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
              />
            );
          }
        return ( 
        
        /* <>{backActionHandler}</> */
        <AppScreen style={styles.container}>
        <View style={{...StyleSheet.absoluteFill}}>
            <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/pexels-scott-webb-305827.jpg')}
            style={styles.imageContainer}
            >
            <View style ={styles.welcomeLogoContainer}>
              <AppLogo animationType="bounceInDown"/>

            </View>
            </ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
            {/* <TabGestureHandler onHandlerStateChange={this.onStateChange}>
            </TabGestureHandler> */}
            <AppButton children= "SIGN IN" onPress={() => this.props.navigation.navigate('Login')}/>
            <AppButton children= "REGISTER" onPress={() => this.props.navigation.navigate('Register')}/>
           
            <AppText style={styles.text}>Or Continue With</AppText>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <AppIcon image={require('../assets/icons8-google-480.png')} backgroundColor={AppColors.white} size={50} elevation={20}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AppFeatherIcon name={"facebook-f"} backgroundColor={AppColors.fbColor} iconColor={AppColors.white} size={50} elevation={20}/>
                </TouchableOpacity>
            </View>
            
            

            
        </View>

    </AppScreen>
    
    );
    }

}

// function WelcomeScreen(props) {
//     return (
//         <div>
            
//         </div>
//     );
// }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 0,
        justifyContent: 'flex-end',
    },

    imageContainer:{
        flex:1,
        height: null,
        width: null,
    },

    buttonContainer:{
        height: height/3,
        justifyContent: 'space-evenly',
        paddingHorizontal: 40,
        paddingBottom: 20,
        //backgroundColor: AppColors.white,

    },

    welcomeLogoContainer:{
        flex:1,
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        //backgroundColor: "white",
        marginTop: 30,
        justifyContent: 'flex-end',
    },

    text:{
        color: AppColors.otherColor_2,
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },

    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    
})

//export default withMyHook(WelcomeScreen);