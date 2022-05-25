import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, LogBox } from 'react-native';
import { auth } from '../config/dataHandler/firebaseDataHandler';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AppScreen from '../components/AppScreen';
import AppDrawer from '../components/AppDrawer';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import AppCard from '../components/AppCard';
import AppImage from '../components/AppImage';
import AppCategories from '../components/AppCategories';

import listingData from '../config/data/listingData';
import bestSellersData from '../config/data/bestSellersData';
import categoriesData from '../config/data/categoriesData';





const {width, height} = Dimensions.get("window");

function ListingScreen({}) {
    
useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Encountered two children with the same key, `lsd2:lsd2`']);
    }, [])
const [refreshing, setRefreshing] = useState(false);
const [bestSellers, setBestSellers] = useState(bestSellersData);
const navigation = useNavigation();

    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style ={styles.headerContainer}>
                <View style = {styles.leftSide}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
                        <AppIcon name="menu" size={55} borderRadius={20} backgroundColor={AppColors.otherColor_2} iconColor={AppColors.textColor} elevation={10}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightSide}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
                    {/* navigation.navigate("Notifications") */}
                        <AppIcon name="bell-outline" size={55} borderRadius={15}  iconColor={AppColors.textColor} elevation={0}/>

                    </TouchableOpacity>
                </View>
            </View>
            
            <View style ={styles.bestSellersContainer}>
                <AppText style={styles.bscTitle}>Bestsellers</AppText>
                
                    <FlatList
                    contentContainerStyle={{justifyContent:'space-between', margin: 20}}
                    data={bestSellers}
                    keyExtractor={(image)=>image.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => 
                    <View style={{padding: 20, flex: 2}}>
                        <AppCard
                        image={item.image}
                        price={item.price}
                        title={item.title}
                        rating={item.rating}
                        onPress={()=>navigation.navigate("ProductDetails")}
                        
                        />
                    </View>
                    }
                    refreshing={refreshing}
                    onRefresh={()=>setBestSellers(bestSellersData)}
                    
                    />
                

            </View>
            <View style={styles.listItemsContainer}>
                <AppText style={styles.licTitle}>Listings</AppText>
                <FlatList
                contentContainerStyle={{justifyContent:'space-between', margin: 20}}
                horizontal={true}
                data={categoriesData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=> 
                <View style={{padding: 5, flex: 2}}>
                    <AppCategories
                    text={item.text}
                    
                    />
                </View>
                }
                />
                <FlatList
                contentContainerStyle={{justifyContent:'space-between', margin: 20}}
                scrollEnabled={false}
                data={listingData}
                keyExtractor={(image)=>image.id}
                numColumns={2}
                renderItem={({item}) => 
                <View style={{padding: 20, flex: 2}}>
                    <AppImage
                    image={item.image}
                    />
                </View>
                }
                />
            </View>
            </KeyboardAwareScrollView>

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    bestSellersContainer:{
        flex: 2,
        //backgroundColor: AppColors.fbColor

    },
    bscTitle:{
        fontWeight: 'bold',
        color: AppColors.textColor,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 25,
    },

    bslistContainer:{
        justifyContent: 'space-around',
        margin: 20, 
    },

    container:{
        backgroundColor: AppColors.otherColor_3,
        
        //marginTop: 20,
    },

    headerContainer:{
        flex: 0.5,
        flexDirection: 'row',
        //backgroundColor: AppColors.black
    },

    leftSide:{
        padding: 10,
        marginTop: 20,
        marginLeft: width/12,
    },

    licTitle:{
        fontWeight: 'bold',
        color: AppColors.textColor,
        padding: 10,
        marginLeft: 20,
        marginTop: 10,
        fontSize: 25,
    },

    listItemsContainer:{
        flex: 1,
        //backgroundColor: AppColors.primaryColor

    },

    rightSide:{
        //backgroundColor: AppColors.black,
        padding: 10,
        marginTop: 20,
        marginLeft: width/2,
        //flexDirection: ,
        
    },

})

export default ListingScreen;