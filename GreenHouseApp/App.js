import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';

import SplashScreen from './app/screens/SplashScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import EulaScreen from './app/screens/EulaScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen'
import ListingScreen from './app/screens/ListingScreen';







export default function App() {
  return (
  //  <NavigationContainer>
  //     <AuthNavigator/>
  //  </NavigationContainer>
   <ListingScreen></ListingScreen>
  //<ForgotPasswordScreen></ForgotPasswordScreen>
  //<NotificationsScreen></NotificationsScreen>
  //<LoginScreen></LoginScreen>
  //<RegisterScreen></RegisterScreen>
  //<EulaScreen></EulaScreen>
  
        //<SplashScreen></SplashScreen>
        //<WelcomeScreen></WelcomeScreen>
      
  );
}

const styles = StyleSheet.create({
});
