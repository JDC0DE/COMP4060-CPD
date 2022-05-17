import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import {GestureHandlerRootView,Swipeable} from 'react-native-gesture-handler';


import AppColors from '../config/AppColors';
import AppText from './AppText';

function AppListItem({image, title, comment, iconComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColor_1} activeOpacity = {0.95}>
                <View style={styles.container}>
                    
                    {image && image?<Image source={image} style={styles.image}/>:iconComponent}
                    <View style={styles.textContainer}>
                        <AppText style = {styles.title}>  {title} </AppText>
                        {comment && <AppText style = {styles.comment}> {comment} </AppText>}
                    </View>
                    
                </View>
                </TouchableHighlight>

            </Swipeable>

        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        
    },

    image:{
        height: 75,
        width:75,
        borderRadius: 37,
        marginLeft: 10,
    },
    textContainer:{
        flexDirection: "column",
        marginLeft: 20,
        
    },
    title:{
        fontWeight: "bold",
        marginVertical:5,
    },
    comment:{
        fontSize:15,
    },
    
})
export default AppListItem;