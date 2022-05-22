import React, {useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';


import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';


function SplashScreen() {
    const navigation = useNavigation();

    const [loop, setLoop] = useState(true);

  useEffect(
    () => {
      let timer = setTimeout(() => setLoop(false), 10000);
      return () => {
        clearTimeout(timer);
      };
    },[]);

    return (
        <AppScreen style = {styles.splashContainer} backgroundColor={AppColors.otherColor_3} >
            <LottieView 
            source={require('../assets/62761-walking-pothos.json')}
            autoPlay
            loop={loop}
            speed={0.5}
            onAnimationFinish={() => navigation.navigate("Welcome")}
            style={styles.backgroundColor}
            />
        </AppScreen>
     );
}

const styles = StyleSheet.create({
    splashContainer:{
        flex: 1,
        backgroundColor: AppColors.otherColor_3,
    },

    backgroundColor:{
        backgroundColor: AppColors.otherColor_3,

    },
    
})

export default SplashScreen;