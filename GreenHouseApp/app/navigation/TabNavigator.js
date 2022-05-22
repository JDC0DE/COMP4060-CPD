import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawNavigator from './DrawNavigator';
import AppColors from '../config/AppColors';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AppIcon from '../components/AppIcon';









const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{tabBarActiveTintColor:AppColors.otherColor_1, tabBarActiveBackgroundColor: AppColors.otherColor_2, headerShown:false }}>
        <AppTab.Screen name = "Listing" component={DrawNavigator} options ={{tabBarIcon: () => <AppIcon size ={30} name="account" backgroundColor={AppColors.otherColor_3}/> }}/>
        <AppTab.Screen name = "Cart" component={CartScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_3}/> }}/>
        <AppTab.Screen name = "Search" component={SearchScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_3}/> }}/>
        <AppTab.Screen name = "Messages" component={MessagesScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_3}/> }}/>
    </AppTab.Navigator>

)

export default TabNavigator;