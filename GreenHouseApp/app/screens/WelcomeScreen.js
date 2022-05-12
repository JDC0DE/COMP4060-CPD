import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity,ImageBackground, BackHandler, Alert } from 'react-native';
import  Asset from 'expo-asset';
import AppLoading from 'expo-app-loading'
import {useNavigation} from '@react-navigation/native';
import { useBackHandler } from "@react-native-community/hooks"
import * as Animatable from 'react-native-animatable';
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

    backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to leave?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
      componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
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
            <AppLogo animationType="bounceInDown"/>
            </ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
            {/* <TabGestureHandler onHandlerStateChange={this.onStateChange}>
            </TabGestureHandler> */}
            <AppButton children= "SIGN IN"/>
            <AppButton children= "REGISTER"/>
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