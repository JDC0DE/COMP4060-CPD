import { Platform } from 'react-native';

export default{
    android: 'serif',
    ios: 'Arial',
    fontSize: 20,
    targetOs: Platform.OS === 'android'? 'Roboto' : 'Arial',
}