import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class AppScreen extends Component{
    render(){
        return(
            <AppScreen style={styles.container}>
            <View style={{...StyleSheet.absoluteFill}}>
                <Image
                source={require('../assets/pexels-scott-webb-305827.jpg')}
                style={styles.imageContainer}
                />
            </View>

        </AppScreen>
        );

    }
}

export default AppScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    imageContainer:{
        flex:1,
        height: null,
        width: null,
    }
})