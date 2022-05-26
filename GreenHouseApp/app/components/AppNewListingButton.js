import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AppColors from '../config/AppColors';
import AppIcon from './AppIcon';
import AppText from './AppText';
import AppScreen from './AppScreen';
import AppTextInputAlt from './AppTextInputAlt';
import AppFonts from '../config/AppFonts';
import AppButton from './AppButton';





function AppNewListingButton({onPress}) {
        
        
        const [modalVisible, setModalVisible] = useState(onPress?true:false);
        const [name, setName] = useState("");
        const [description, setDescription] = useState("");
        const [price, setPrice] = useState("");
        const[image, setImage] = useState(null);
        
        const [nameError, setNameError] = useState("");
        const [descriptionError, setDescriptionError] = useState("");
        const [priceError, setPriceError] = useState("")
        const[imageError, setImageError]=useState("");

        
        
        let openImagePickerAsync = async () => {
            let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
            if (permissionResult.granted === false) {
              alert("Permission to access camera roll is required!");
              return;
            }
        
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
        
            if (pickerResult.cancelled === true) {
                return;
              }
        
            setImage({path: pickerResult.uri});
            console.log(pickerResult);
          }
        
          const doErrorCheck = () => { 
            setNameError(name.length>0?" ": "Please set a valid name");
            setDescriptionError(description.length>0?" ": "Please set a valid description");
            setPriceError(price.length>0 && isNaN(price) ?" ": "Please set a valid price");
            setImageError(image?"": "Please pick an image");
            return((name.length>0) && (description.length>0) && (price.length>0) && (image)? true:false);
        }
    return (
        <>
        <TouchableOpacity onPress={()=> setModalVisible(onPress)}>
            <View style ={styles.conatiner}>
                <AppIcon name={'plus'} size={100} iconColor={AppColors.otherColor_2}/>
            </View>
        </TouchableOpacity>

        <Modal visible={modalVisible} animationType={"slide"}>
            <AppScreen style = {{borderRadius:20, marginTop: 0, backgroundColor: AppColors.otherColor_3, padding: 10}}>
                <AppText style={{textAlign:'center' ,color: '#1ac6ff', fontWeight: 'bold', fontSize: 15, fontFamily: AppFonts.targetOs}} onPress={() => setModalVisible(false)}>Close</AppText>
                <AppTextInputAlt 
                icon = "rename-box"
                placeholder="Product Name"
                value={name}
                onChangeText={(inputText) => setName(inputText)}
                >
                </AppTextInputAlt>

                {nameError.length>0? <AppText style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {nameError}</AppText>: <></>}

                <AppTextInputAlt 
                icon = "image-filter-hdr"
                placeholder="Product Description"
                value={description}
                onChangeText={(inputText) => setDescription(inputText)}
                >
                </AppTextInputAlt>

                {descriptionError.length>0? <AppText style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {descriptionError}</AppText>: <></>}

                <AppTextInputAlt 
                icon = "currency-usd"
                placeholder="Product Price"
                value={price}
                onChangeText={(inputText) => setPrice(inputText)}
                >
                </AppTextInputAlt>

                {priceError.length>0? <AppText style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {priceError}</AppText>: <></>}
                

                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10}}>
                <TouchableOpacity style ={styles.imageButton} onPress={openImagePickerAsync}>
                    <AppIcon name = "image-multiple-outline" size = {80} iconColor={AppColors.otherColor_3} backgroundColor ={AppColors.otherColor_2}></AppIcon>
                    {image && <Image source={{uri: image.path}} style = {{height: 80, width: 80, borderRadius: 10, marginLeft: 20, marginBottom: 10}}/>}
                </TouchableOpacity>

                {imageError.length>0? <AppText style={{margin: 5, color: 'red', fontSize: 16, fontFamily: AppFonts.targetOs}}> {imageError}</AppText>: <></>}

                </View>
                <AppButton children={"CREATE LISTING"} onPress={() => {
                    if(doErrorCheck()){
                        setModalVisible(false);

                    }
                }
                    }/>
                    
            </AppScreen>
    </Modal>
        
        </>

        
    );
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: AppColors.secondaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        borderRadius: 35,
        bottom: 20,
        elevation: 10,
        shadowColor: AppColors.black,
    },
})

export default AppNewListingButton;