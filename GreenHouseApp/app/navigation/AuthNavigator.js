import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';




const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <AppStack.Screen name='Splash' component={SplashScreen}/>
        <AppStack.Screen name='Welcome' component={WelcomeScreen}/>
    </AppStack.Navigator>
)

export default AuthNavigator;