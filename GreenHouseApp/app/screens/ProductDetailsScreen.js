import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppBackButton from '../components/AppBackButton';
import AppText from '../components/AppText';
import AppIcon from '../components/AppIcon';
import AppButton from '../components/AppButton';



const {width, height} = Dimensions.get("window");

function ProductDetailsScreen({navigation, route}) {
    //const {item} = route.params.paramItem;
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
              



            </View>
            <View style={styles.subHeaderContainer}/>

            <View style={styles.bottomContainer}>
            <AppBackButton onPress={()=> navigation.goBack()} iconColor={AppColors.black}/>
                <View style={styles.topHalfContainer}>
                    <ImageBackground source={window.passedItem.image} style={styles.productImage}/>
                </View>
                <View style={styles.bottomHalfContainer}>
                    <AppText style ={styles.titleText}>{window.passedItem.title}</AppText>
                        <View style={styles.detailsContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.reviewContainer}>
                                    <AppIcon name={"star-outline"} size={50} iconColor={AppColors.otherColor_3}/>
                                </View>
                                <View style={styles.ratingContainer}>
                                    <AppText style={{ color: AppColors.commentColor, fontSize: 15}}>{window.passedItem.rating}</AppText>
                                </View>
                            </View>
                            <View style={styles.resContainer}>
                                <AppText style={{color: AppColors.commentColor, fontSize: 15}}>{"("}{window.passedItem.no_reviews} reviews{")"}</AppText>
                            </View>
                            <AppText style ={styles.infoTitle}>About this item</AppText>
                            <View style={styles.descContainer}>
                                <AppText style={{color: AppColors.commentColor, fontSize: 15}}>{window.passedItem.description} </AppText>
                            </View>
                        </View>
                        <AppButton children={"ADD TO CART"} color={"secondaryColor"} textStyle={{color:AppColors.otherColor_3}}/>
                </View>
            </View>
            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        
    },

    headerContainer:{
        height: 230,
        width: 230,
        borderRadius: 180,
        backgroundColor: AppColors.primaryColor,
        position: 'absolute',
        top: -150,
        left: -20,
        transform: [{scaleX: 2}],
    },

    subHeaderContainer:{
        height: 220,
        width: 220,
        borderRadius: 200,
        backgroundColor: AppColors.otherColor_1,
        position: 'absolute',
        top: -120,
        left: -80,
        transform: [{scaleX: 2}]
        

    },

    bottomContainer: {
        flex: 1,
        
    },

    topOfContainer:{
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    topHalfContainer:{
        flex: 1,
        backgroundColor: AppColors.otherColor_3,
    },

    bottomHalfContainer: {
        flex: 1,
        backgroundColor: AppColors.otherColor_1,
        overflow: 'hidden',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

    },

    productImage: {
        height: height * 0.4,
        justifyContent: 'center',
    },

    titleText:{
        fontWeight: 'bold',
        fontSize: 25,
        color: AppColors.textColor,
    },

    reviewContainer: {
        flexDirection: 'row',

    },
    ratingContainer:{
        marginTop: 15,
        flexDirection: 'row',
        
    },

    detailsContainer: {
        //flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    reviewText:{
        flexDirection: 'column',
        
    },

    resContainer: {
        flexDirection: 'column',
    },

    infoTitle:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: AppColors.textColor,
    },

    descContainer: {
        marginTop:20,
        paddingBottom: 10,
    },
    
})

export default ProductDetailsScreen;