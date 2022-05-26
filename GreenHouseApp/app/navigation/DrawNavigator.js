import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ListingScreen from '../screens/ListingScreen';
import AppDrawer from '../components/AppDrawer';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppFonts from '../config/AppFonts';
import MyAccountScreen from '../screens/MyAccountScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyListingsScreen from '../screens/MyListingsScreen';











const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
    return(
        
    <Drawer.Navigator drawerContent={props => <AppDrawer {...props}/>} screenOptions={{drawerHideStatusBarOnOpen:false,drawerStyle:{position:'absolute', overflow: 'scroll'},drawerInActiveTintColor:AppColors.otherColor_1, drawerActiveTintColor:AppColors.textColor, drawerActiveBackgroundColor: AppColors.otherColor_2, headerShown:false, swipeEnabled:false, drawerLabelStyle:{fontFamily:AppFonts.targetOs, fontSize:13,marginLeft: -15}}}>
      <Drawer.Screen  name = "Home" component={ListingScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="home" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "My Account" component={MyAccountScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="account-details" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "My Listings" component={MyListingsScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="clipboard-list" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "Settings" component={SettingsScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="cog" iconColor={AppColors.primaryColor}/>}}/>
    </Drawer.Navigator>
   
  );
};

  export default DrawNavigator;