import React, {useEffect, useRef, useState} from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {GestureHandlerRootView,Swipeable} from 'react-native-gesture-handler';


import AppColors from '../config/AppColors';
import AppText from './AppText';


function AppListItem({id,image, title, comment, iconComponent, onPress, renderRightActions, liked = false, likingComment ,}) {
    const [post, setPost] = useState({
        isLiked: false,
    });

    const updatingLikes = () => {
        setPost({
            ...post,
            isLiked: !post.isLiked,
        })
    };
    const animation = useRef(null);
    const isFirstRun = useRef(true);

    useEffect(() => {
        if(isFirstRun.current){
            if(post.isLiked) {
                animation.current.play(66,66);
            }
            else{
                animation.current.play(19,19);
            }
            isFirstRun.current = false;
        }
        else if (post.isLiked) {
            animation.current.play(19,50);
        }
        else {
            animation.current.play(0,19);
        }

    }, [post.isLiked]);

    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColor_1} activeOpacity = {0.95}>
                <View style={styles.container}>
                    
                    {image && image?<Image source={image} style={styles.image}/>:iconComponent}
                    <View style={{flexDirection: 'column'}}>
                        <View style={styles.textContainer}>
                            <AppText style = {styles.title}>  {title} </AppText>
                            
                        </View>
                        <View style={styles.commentContainer}>
                            {comment && <AppText style = {styles.comment}> {comment} </AppText>}
                        </View>

                    </View>

                    <View style={styles.likeContainer}>
                        <TouchableOpacity onPress ={updatingLikes}>
                            <LottieView
                            ref={animation}
                            style={styles.heartAnimation}
                            source={require('../assets/44921-like-animation.json')}
                            autoPlay={false}
                            loop={false}
                            />
                        </TouchableOpacity>

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
    commentContainer:{
        marginLeft: 20,
        justifyContent: 'center',
    },

    
    heartAnimation:{
        width: 50,
        height: 50,
        
    },
    comment:{
        fontSize:15,
        color: 'rgba(71, 91, 99, 0.4)',
        
    },
    image:{
        height: 75,
        width:75,
        borderRadius: 37,
        marginLeft: 10,
    },
    likeContainer:{
        marginLeft: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer:{
        marginLeft: 11,
        justifyContent: 'center',
        
    },
    title:{
        fontWeight: "bold",
        marginVertical:5,
    },
    
})
export default AppListItem;