import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawNavigator from './DrawNavigator';






const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{tabBarActiveTintColor:AppColors.otherColor_3, tabBarActiveBackgroundColor: AppColors.otherColor_4, headerShown:false }}>
        <AppTab.Screen name = "Listing" component={DrawNavigator} options ={{tabBarIcon: () => <AppIcon size ={30} name="account" backgroundColor={AppColors.otherColor_4}/> }}/>
        <AppTab.Screen name = "Cart" component={MemoriesScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_4}/> }}/>
        <AppTab.Screen name = "Search" component={MemoriesScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_4}/> }}/>
        <AppTab.Screen name = "Messages" component={MemoriesScreen} options ={{tabBarIcon: () => <AppIcon size ={30} name="apps" backgroundColor={AppColors.otherColor_4}/> }}/>
    </AppTab.Navigator>

)

export default TabNavigator;