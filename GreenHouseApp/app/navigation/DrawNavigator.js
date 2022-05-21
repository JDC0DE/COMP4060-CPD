import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ListingScreen from '../screens/ListingScreen';
import AppDrawer from '../components/AppDrawer';









const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
    return(
        
    <Drawer.Navigator drawerContent={props => <AppDrawer {...props}/>} screenOptions={{drawerInActiveTintColor:AppColors.otherColor_3, drawerActiveTintColor:AppColors.otherColor_3, drawerActiveBackgroundColor: AppColors.otherColor_4, headerShown:false, swipeEnabled:false, drawerLabelStyle:{fontFamily:AppFonts.targetOs, fontSize:13,marginLeft: -15}}}>
      <Drawer.Screen  name = "Home" component={ListingScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="home" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "My Account" component={SettingsScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="cog" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "My Listings" component={SettingsScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="cog" iconColor={AppColors.primaryColor}/>}}/>
      <Drawer.Screen  name = "Settings" component={SettingsScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="cog" iconColor={AppColors.primaryColor}/>}}/>
    </Drawer.Navigator>
   
  );
};

  export default DrawNavigator;