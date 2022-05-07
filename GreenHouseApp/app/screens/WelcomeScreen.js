import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions, TouchableOpacity,ImageBackground } from 'react-native';
import  Asset from 'expo-asset';
import AppLoading from 'expo-app-loading'
import {useNavigation} from '@react-navigation/native';


import AppScreen from '../components/AppScreen';
import AppIndex from '../components/AppIndex';
import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText';
import AppIcon from '../components/AppIcon';
import AppFeatherIcon from '../components/AppAltIcon';




const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;

const {width, height} = Dimensions.get("window");

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  export default class WelcomeScreen extends React.Component{
    constructor(props){
        super()
        this.state={
            isReady:false
        }
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
          require('../assets/pexels-scott-webb-305827.jpg'),
          //require('../assets/GreenHouse_Logo.png'),
        ]);
    
    
        await Promise.all([...imageAssets]);
      }

    render() {
        if (!this.state.isReady) {
            return (
              <AppLoading
                startAsync={this._loadAssetsAsync}
                onFinish={() => this.setState({ isReady: true })}
                onError={console.warn}
              />
            );
          }
        return ( <AppScreen style={styles.container}>
        <View style={{...StyleSheet.absoluteFill}}>
            <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/pexels-scott-webb-305827.jpg')}
            style={styles.imageContainer}
            >
            <Image
                source={require('../assets/GreenHouse_Logo_Updated.png')}
                resizeMode= 'cover'
                style={styles.logo}
                />
            </ImageBackground>
        </View>
        <View style={styles.buttonContainer}>
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

    logo:{
        //flex: 1,
        marginTop: 50,
        height: '30%',
        width: '100%',
    },
})

//export default withNavigation(WelcomeScreen);