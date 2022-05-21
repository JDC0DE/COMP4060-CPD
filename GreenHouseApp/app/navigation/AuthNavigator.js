import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import EulaScreen from '../screens/EulaScreen';
import ListingScreen from '../screens/ListingScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import TabNavigator from './TabNavigator';









const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <AppStack.Screen name='Splash' component={SplashScreen}/>
        <AppStack.Screen name='Welcome' component={WelcomeScreen}/>
        <AppStack.Screen name='Login' component={LoginScreen}/>
        <AppStack.Screen name='Register' component={RegisterScreen}/>
        <AppStack.Screen name='Lis' component={TabNavigator}/>
        <AppStack.Screen name='Eula' component={EulaScreen}/>
        <AppStack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
    </AppStack.Navigator>
)

export default AuthNavigator;