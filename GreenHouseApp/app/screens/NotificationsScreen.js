import React, {useState} from 'react';
import { StyleSheet,FlatList, View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppBackButton from '../components/AppBackButton';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppListItemSeparator from '../components/AppListItemSeparator';
import AppListItemDeleteAction from '../components/AppListItemDeleteAction';





const initialNotifications = [
    {
        id: 1,
        title: "Test1",
        comment: "Test comment",
        image: require('../assets/headshots/Headshot1.png'),
        iconComponent: null,
    },
    {
        id: 2,
        title: "Test1",
        comment: "Test comment",
        image: require('../assets/headshots/Headshot2.png'),
        iconComponent: null,
    },
    {
        id: 3,
        title: "Test1",
        comment: "Test comment",
        image: require('../assets/headshots/Headshot3.png'),
        iconComponent: null,
    },
    {
        id: 4,
        title: "Test1",
        comment: "Test comment",
        image: null,
        iconComponent: <AppIcon name = "account-outline" size={75} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} position={10}/>,
    },
]

function NotificationsScreen({navigation}) {
    const [notifications, setNotifications] = useState(initialNotifications); //destructuring state variable,hook array to grab 1st two elements of array
    const [refreshing, setRefreshing] = useState(false);
    //deletes notifications from notifications
    const handleDelete = notification => {
        const newNotifications = notifications.filter(notif => notif.id !== notification.id);
        setNotifications(newNotifications);
    }
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <AppBackButton  navigation={navigation} destination={'Listing'} iconColor={AppColors.black}/>
            <FlatList
            data={notifications}
            keyExtractor={notifications=> notifications.id.toString()}
            renderItem={({item}) => (
            <AppListItem 
            title={item.title}
            comment={item.comment}
            image={item.image}
            iconComponent={item.iconComponent}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => 
            <AppListItemDeleteAction
            onPress={() => handleDelete(item)}
            />} 
            />
            )}
            ItemSeparatorComponent={AppListItemSeparator}
            refreshing={refreshing}
            onRefresh={()=> {
                setNotifications(initialNotifications);
            }}
            />
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
    },
    
})

export default NotificationsScreen;