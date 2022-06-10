
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCartStorage = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('cartData', jsonValue)
    } catch (e) {
        console.log('setCartStorage Error', e);
    }
}

export const getCartStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('cartData')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log('getCartStorage Error', e);

    }
}