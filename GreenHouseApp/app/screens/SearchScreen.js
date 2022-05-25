import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppScreen from '../components/AppScreen';
import AppTextInputAlt from '../components/AppTextInputAlt';
import AppColors from '../config/AppColors';


function SearchScreen(props) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <View style={styles.searchBar}>
                    <AppTextInputAlt
                    icon ={'magnify'}
                    color={AppColors.commentColor}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={"What are you looking for?"}
                    />
                </View>

            </View>
            <View style={styles.bottomContainer}>
                

            </View>
            

        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        
        //marginTop: 20,
    },
    headerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    bottomContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 150,
    },

    searchBar:{
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        marginBottom: 30,
    },
})

export default SearchScreen;