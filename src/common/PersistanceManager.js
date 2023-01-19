import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorage = async (keyValue, data) => {
  try {
    const jsonValue = JSON.stringify(data);
    console.log('storeValues => ', jsonValue);
    await AsyncStorage.setItem(keyValue, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const getAsyncStorage = async keyValue => {
  try {
    const value = await AsyncStorage.getItem(keyValue);
    console.log('storedValues => ', value);
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
    return null;
  }
};