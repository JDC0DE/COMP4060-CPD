import React, {useState} from 'react';
import { Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawNavigator from './DrawNavigator';
import AppColors from '../config/AppColors';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AppIcon from '../components/AppIcon';
import CreateListingScreen from '../screens/CreateListingScreen';
import AppNewListingButton from '../components/AppNewListingButton';
import AppText from '../components/AppText';














const AppTab = createBottomTabNavigator();


const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{ tabBarStyle:{ backgroundColor: AppColors.otherColor_1, borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 75, position: 'absolute', elevation: 40, shadowColor: AppColors.black, }, tabBarItemStyle:{overflow: 'hidden', margin: 10} ,tabBarActiveTintColor:AppColors.otherColor_3, tabBarActiveBackgroundColor: AppColors.otherColor_1, headerShown:false }}>
        <AppTab.Screen name = "Listing" component={DrawNavigator} options ={{tabBarIcon: () => <AppIcon size ={50} name="home" iconColor={AppColors.otherColor_3} /> }}/>
        <AppTab.Screen name = "Cart" component={CartScreen} options ={{tabBarIcon: () => <AppIcon size ={50} name="cart" iconColor={AppColors.otherColor_3}/> }}/>
        <AppTab.Screen name = "ListingEdit" component={CreateListingScreen} options ={{tabBarButton: () => <AppNewListingButton onPress={true}/> }}/>
        <AppTab.Screen name = "Search" component={SearchScreen} options ={{tabBarIcon: () => <AppIcon size ={50} name="magnify" iconColor={AppColors.otherColor_3}/> }}/>
        <AppTab.Screen name = "Messages" component={MessagesScreen} options ={{tabBarIcon: () => <AppIcon size ={50} name="message" iconColor={AppColors.otherColor_3}/> }}/>
    </AppTab.Navigator>

    
    

)

export default TabNavigator;