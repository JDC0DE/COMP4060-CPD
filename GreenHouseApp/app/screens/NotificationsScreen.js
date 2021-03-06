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
import AppText from '../components/AppText';





const initialNotifications = [
    {
        id: 1,
        title: "Bob",
        comment: "Great flowers",
        image: require('../assets/headshots/Headshot1.png'),
        iconComponent: null,
    
    },
    {
        id: 2,
        title: "Zannie",
        comment: "Great pots!!!!!",
        image: require('../assets/headshots/Headshot2.png'),
        iconComponent: null,
        
    },
    {
        id: 3,
        title: "Jill",
        comment: "BEST! Roses!",
        image: require('../assets/headshots/Headshot3.png'),
        iconComponent: null,
      
    },
    {
        id: 4,
        title: "Bazza",
        comment: "Fine addition!",
        image: null,
        iconComponent: <AppIcon name = "account-outline" size={75} iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor_2} position={10}/>,
        
    },
]

function NotificationsScreen({}) {
    const navigation = useNavigation();
    const [notifications, setNotifications] = useState(initialNotifications); //destructuring state variable,hook array to grab 1st two elements of array
    const [refreshing, setRefreshing] = useState(false);
    const [display, setDisplay] = useState(initialNotifications);
    //deletes notifications from notifications
    const handleDelete = notification => {
        const newNotifications = notifications.filter(notif => notif.id !== notification.id);
        setNotifications(newNotifications);
    }
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <AppBackButton  onPress={()=>navigation.navigate("Listing")} iconColor={AppColors.black}/>
            <AppText style={styles.titleText}>Comments</AppText>
            <FlatList
            data={notifications}
            keyExtractor={notifications=> notifications.id.toString()}
            renderItem={({item}) => (
            <AppListItem 
            id={item.id}
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
        marginTop: 0,
    },

    titleText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 23,
        paddingBottom: 10,

    },
    
})

export default NotificationsScreen;