import React from 'react';
import { StyleSheet } from 'react-native';
import AppScreen from '../components/AppScreen';
import { auth } from '../config/dataHandler/firebaseDataHandler';
import {useNavigation} from '@react-navigation/native';


function ListingScreen({navigation}) {
const handleSignOut = () => {
    auth.signOut().then(() => {
        navigation.navigate("Welcome")
    })
    .catch(error => alert(error.message))
}
    return (
        <AppScreen>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    
})

export default ListingScreen;